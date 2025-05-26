import React from 'react';
import * as S from "./styles";

interface ComboBoxProps {
  title: string;
  options: string[];
  selected: string;
  onChange: (value: string) => void;
  defaultOption?: string;
}

const ComboBox: React.FC<ComboBoxProps> = ({
  title,
  options,
  selected,
  onChange,
  defaultOption = 'Nenhum',
}) => {
  return (
    <S.Container>
      <S.Label>{title}</S.Label>
      <S.Select value={selected} onChange={(e) => onChange(e.target.value)}>
        <option value={defaultOption}>{defaultOption}</option>
        {options.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </S.Select>
    </S.Container>
  );
};

export default ComboBox;