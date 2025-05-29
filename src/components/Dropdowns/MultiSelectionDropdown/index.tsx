import { useState, useEffect } from "react";
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

    useEffect(() => {
        setLocalOptions(options);
    }, [options]);

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

    return (
        <S.ExternalContainer>
            <S.DropdownHeader onClick={() => setIsDropdownOpen(!isDropwdownOpen)}>
            <S.HeaderTitle> {label} </S.HeaderTitle>
                {isDropwdownOpen ? <S.CloseDropdownIcon /> : <S.OpenDropdownIcon />}
            </S.DropdownHeader>

            {isDropwdownOpen && (
                <S.DropdownContainer>
                    <S.OptionsList>
                        {localOptions.map((option) => (
                            <S.OptionItem key={option.label}>
                                <S.OptionLabel>{option.label}</S.OptionLabel>
                                <S.PriceAndIconsContainer>
                                    <S.OptionPrice>
                                        {option.price ? `+ R$ ${option.price.toFixed(2)}` : "Grátis"}
                                    </S.OptionPrice>
                                    <>
                                        {option.selecteds > 0 ? (
                                            <S.CounterContainer>
                                                <S.RemoveItemButton onClick={() => handleRemoveItem(option)} />
                                                <span>{option.selecteds}</span>
                                            </S.CounterContainer>
                                        ) : (
                                            <div style={{ width: '45px' }} /> 
                                        )}
                                        </>
                                    <S.AddItemButton onClick={() => handleAddItem(option)} />
                                </S.PriceAndIconsContainer>
                            </S.OptionItem>
                        ))}
                    </S.OptionsList>
                </S.DropdownContainer>
            )}
        </S.ExternalContainer>
    );
};

export default MultiSelectionDropdown;
