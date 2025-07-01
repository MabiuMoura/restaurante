import { useState, useEffect, useRef } from "react";
import type { ISaleItem } from "../../../shared/constants/interfaces";
import * as S from "./styles";
import EditPriceInput from "./components/EditPriceInput";

interface MultiSelectionDropdownProps {
  options: ISaleItem[];
  value: ISaleItem[]; 
  onChange: (value: ISaleItem[]) => void; // função para atualizar o valor
  label: string;
}


const MultiSelectionDropdown = ({ options, label, onChange }: MultiSelectionDropdownProps) => {
    const [isDropwdownOpen, setIsDropdownOpen] = useState(false);
    const [localOptions, setLocalOptions] = useState<ISaleItem[]>([]);
    const [newPrice, setNewPrice] = useState<number | null>(null);

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

    const handleAddItem = (option: ISaleItem) => {
        const updated = localOptions.map(opt => {
            if (opt.label === option.label) {
                return { ...opt, quantity: (opt.quantity ?? 0) + 1 };
            }
            return opt;
        });

        setLocalOptions(updated);
        onChange(updated.filter(opt => opt.quantity && opt.quantity > 0));
    };

    const handleRemoveItem = (option: ISaleItem) => {
        const updatedOptions = localOptions.map((opt) => {
            if (opt.label === option.label && opt.quantity && opt.quantity > 0) {
                return { ...opt, quantity: opt.quantity - 1 };
            }
            return opt;
        });

        setLocalOptions(updatedOptions);
    };

    const handleOpenEditPrice = (option: ISaleItem) => {
        setEditingOptionLabel(option.label);
    };

    const handleSaveEditPrice = (option: ISaleItem) => {
        if (newPrice !== null) {
            const updatedOptions = localOptions.map((opt) => {
                if (opt.id === option.id) {
                    return { ...opt, editedPrice: newPrice };
                }
                return opt;
            });

            setLocalOptions(updatedOptions);
            setEditingOptionLabel(null);
            setNewPrice(null);
        }
    }

    const handleRefreshPrice = (option: ISaleItem) => {
        const updatedOptions = localOptions.map((opt) => {
            if (opt.id === option.id) {
                return { ...opt, editedPrice: 0 };
            }
            return opt;
        });

        setNewPrice(null);
        setLocalOptions(updatedOptions);
    }

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
                                        <S.CancelEditPrice onClick={() => setEditingOptionLabel(null)} />
                                            <EditPriceInput newPrice= {option.editedPrice ?? null} setNewPrice={setNewPrice} ></EditPriceInput>
                                        <S.EditPriceButton onClick={() => handleSaveEditPrice(option)}>Salvar</S.EditPriceButton>
                                    </S.EditPriceContainer>
                                ) : (
                                    <S.PriceAndIconsContainer>
                                        <S.EditPriceIcon onClick={() => handleOpenEditPrice(option)} />
                                        <S.RefreshIcon onClick={() => handleRefreshPrice(option)}/>
                                        <S.OptionPrice>
                                        {option.editedPrice
                                            ? `R$ ${option.editedPrice.toFixed(2)}`
                                            : option.price
                                            ? `R$ ${option.price.toFixed(2)}`
                                            : "A Definir"}
                                        </S.OptionPrice>

                                        {option.quantity > 0 ? (
                                            <S.CounterContainer>
                                                <S.RemoveItemButton onClick={() => handleRemoveItem(option)} />
                                                <span>{option.quantity}</span>
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
