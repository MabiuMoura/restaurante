import * as S from './styles';

interface PageTitleProps {
    title: string;
}

const PageTitle = ({title}:PageTitleProps) => {
    return (
        <S.TitleContainer>
            <S.Title>{title}</S.Title>
        </S.TitleContainer>
    )
}

export default PageTitle;