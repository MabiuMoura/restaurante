import * as S from './styles';

type MultiItemInputProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  errorMessage?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  inputRef?: React.Ref<HTMLInputElement>;
};

const MultiItemInput = ({
  label,
  name,
  type = "text",
  placeholder,
  errorMessage,
  value,
  onChange,
  onBlur,
  inputRef,
}:MultiItemInputProps) => {

  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      <S.InputContainer>
        <S.Input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            hasError={!!errorMessage}
            ref={inputRef}
        />
        {errorMessage && <S.Error>{errorMessage}</S.Error>}
      </S.InputContainer>
    </S.Wrapper>
  );
}

export default MultiItemInput;