    import { useState, useEffect, useRef } from "react";
    import type { ISelectionOption } from "../../../shared/constants/interfaces";
    import * as S from "./styles";

    interface MultiSelectionDropdownProps {
        options: ISelectionOption[];
        selectedOptions: ISelectionOption[];
        label: string;
    }

    const MultiSelectionDropdown = ({ options, label }: MultiSelectionDropdownProps) => {
        const [isDropwdownOpen, setIsDropdownOpen] = useState(false);
        const [localOptions, setLocalOptions] = useState<ISelectionOption[]>([]);
        const dropdownRef = useRef<HTMLDivElement>(null);   

    const [editingOptionLabel, setEditingOptionLabel] = useState<string | null>(null);

        useEffect(() => {
            setLocalOptions(options);
        }, [options]);

        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (
                    dropdownRef.current &&
                    !dropdownRef.current.contains(event.target as Node)
                ) {
                    setIsDropdownOpen(false);
                }
            };

            if (isDropwdownOpen) {
                document.addEventListener("mousedown", handleClickOutside);
            } else {
                setEditingOptionLabel(null);
            }

            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [isDropwdownOpen]);

        const handleAddItem = (option: ISelectionOption) => {
            const updatedOptions = localOptions.map((opt) => {
                if (opt.label === option.label) {
                    return { ...opt, selecteds: (opt.selecteds || 0) + 1 };
                }
                return opt;
            });

            setLocalOptions(updatedOptions);
        };

        const handleRemoveItem = (option: ISelectionOption) => {
            const updatedOptions = localOptions.map((opt) => {
                if (opt.label === option.label && opt.selecteds && opt.selecteds > 0) {
                    return { ...opt, selecteds: opt.selecteds - 1 };
                }
                return opt;
            });

            setLocalOptions(updatedOptions);
        };

        const handleEditPrice = (option: ISelectionOption) => {
            setEditingOptionLabel(option.label);
        };

        return (
            <S.ExternalContainer  ref={dropdownRef}>
                <S.DropdownHeader onClick={() => setIsDropdownOpen(!isDropwdownOpen)}>
                <S.HeaderTitle> {label} </S.HeaderTitle>
                    {isDropwdownOpen ? <S.CloseDropdownIcon /> : <S.OpenDropdownIcon />}
                </S.DropdownHeader>

                {isDropwdownOpen && (
                    <S.DropdownContainer>
                        <S.OptionsList>
                            {localOptions.map((option, index) => (
                                <S.OptionItem key={index}>
                                    <S.OptionLabel>{option.label}</S.OptionLabel>
                                    {editingOptionLabel === option.label ? (
                                        <S.EditPriceContainer>
                                            {/* Coloque aqui os campos de edição de preço */}
                                            <S.CancelEditPrice onClick={() => setEditingOptionLabel(null)} />
                                            <input type="number" placeholder="Novo preço" />
                                            <button onClick={() => setEditingOptionLabel(null)}>Salvar</button>
                                        </S.EditPriceContainer>
                                    ) : (
                                        <S.PriceAndIconsContainer>
                                            <S.EditPriceIcon onClick={() => handleEditPrice(option)} />
                                            <S.OptionPrice>
                                                {option.price ? `R$ ${option.price.toFixed(2)}` : "A Definir"}
                                            </S.OptionPrice>

                                            {option.selecteds > 0 ? (
                                                <S.CounterContainer>
                                                    <S.RemoveItemButton onClick={() => handleRemoveItem(option)} />
                                                    <span>{option.selecteds}</span>
                                                </S.CounterContainer>
                                            ) : (
                                                <div style={{ width: '48px' }} />
                                            )}
                                            <S.AddItemButton onClick={() => handleAddItem(option)} />
                                        </S.PriceAndIconsContainer>
                                    )}
                                </S.OptionItem>
                            ))}
                        </S.OptionsList>
                    </S.DropdownContainer>
                )}
            </S.ExternalContainer>
        );
    };

    export default MultiSelectionDropdown;
