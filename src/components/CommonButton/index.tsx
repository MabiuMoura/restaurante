import * as S from './styles';

interface CommonButtonProps {
  title: string;
  onClick: () => void;
}

const CommonButton = ({title, onClick}:CommonButtonProps) => {
    return (
        <S.StyledButton onClick={onClick}>{title}</S.StyledButton>
    )
};

export default CommonButton;