import React from 'react';
import * as S from "./styles";
import Select from 'react-select';

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
  const formattedOptions = [
    { value: defaultOption, label: defaultOption },
    ...options.map(option => ({ value: option, label: option }))
  ];

  const selectedOption = formattedOptions.find(opt => opt.value === selected);
  return (
    <S.Container>
      <S.Label>{title}</S.Label>
      <Select
              value={selectedOption}
              onChange={(option) => option && onChange(option.value)}
              options={formattedOptions}
              styles={{
                control: (base) => ({
                  ...base,
                  height: 40,
                  padding: '0 12px',
                  borderRadius: 6,
                  borderColor: '#ccc',
                  fontSize: 14,
                  zIndex:999,
                }),
                option: (base) => ({
                  ...base,
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  color: 'black',
                  zIndex:999,
                }),
              }}
            />
    </S.Container>
  );
};

export default ComboBox;