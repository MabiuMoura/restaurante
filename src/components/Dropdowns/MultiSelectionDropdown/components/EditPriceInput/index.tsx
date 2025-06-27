import { useState } from 'react';
import * as S from './styles';

interface EditPriceInputProps {
  setNewPrice: (price: number | null) => void;
  newPrice: number | null;
}

const EditPriceInput = ({ setNewPrice, newPrice }: EditPriceInputProps) => {
  const initialDisplay = typeof newPrice === 'number'
    ? newPrice.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })
    : (0).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });

  const [displayValue, setDisplayValue] = useState(initialDisplay);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, '');
    const numericValue = parseFloat(rawValue) / 100;

    if (numericValue > 999.99) return;

    setNewPrice(numericValue);

    const formatted = numericValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    setDisplayValue(formatted);
  };

  return (
    <S.Input
      type="text"
      placeholder="Novo Preço"
      value={displayValue}
      onChange={handleChange}
    />
  );
};

export default EditPriceInput;
