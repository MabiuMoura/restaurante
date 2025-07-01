import { useNavigate } from "react-router-dom";
import * as S from "./styles";


const ReturnPage: React.FC = () => {
    const navigate = useNavigate();

    const handleReturnPage = () => {
        navigate(-1);
    };

    return(
        <S.ReturnPageIcon onClick={handleReturnPage} />
    )
}

export default ReturnPage