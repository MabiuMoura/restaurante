import { useState } from "react";
import type { ISelectionOption } from "../../../shared/constants/interfaces";
import * as S from "./styles";

interface MultiSelectionDropdownProps {
    options: ISelectionOption[];
    selectedOptions: ISelectionOption[];
}

const MultiSelectionDropdown = ({options, selectedOptions}: MultiSelectionDropdownProps) => {
    const [isDropwdownOpen, setIsDropdownOpen] = useState(false);

    console.log("Adicionando item:", options);
    const handleAddItem = (option: ISelectionOption) => {
        console.log("Adicionando item:", option);
        option.selecteds += 1;
    }

    return (
        <S.ExternalContainer>
        <S.DropdownHeader onClick={() => setIsDropdownOpen(!isDropwdownOpen)}>
            <S.HeaderTitle>Selecione as opções</S.HeaderTitle>
        </S.DropdownHeader>

        {isDropwdownOpen && (
            <S.DropdownContainer>
                <S.OptionsList>
                    {options.map((option) => (
                        <S.OptionItem key={option.label}>
                            <S.OptionLabel>{option.label} </S.OptionLabel>
                            <S.OptionPrice>
                                {option.price ? `+ R$ ${option.price.toFixed(2)}` : "Grátis"}
                            </S.OptionPrice>
                                {option.selecteds > 0 && (
                                    <>
                                        <S.RemoveItemButton />
                                        {option.selecteds}
                                    </>
                                )}
                            <S.AddItemButton  onClick={() => handleAddItem(option)}/>
                        </S.OptionItem>
                    ))}
                </S.OptionsList>
            </S.DropdownContainer>
        )}
    </S.ExternalContainer>
    )
}

export default MultiSelectionDropdown;