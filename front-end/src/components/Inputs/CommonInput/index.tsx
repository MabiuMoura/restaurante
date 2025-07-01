import * as S from './styles';

type CommonInputProps = {
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

const CommonInput = ({
  label,
  name,
  type = "text",
  placeholder,
  errorMessage,
  value,
  onChange,
  onBlur,
  inputRef,
}:CommonInputProps) => {

  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
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
    </S.Wrapper>
  );
}

export default CommonInput;