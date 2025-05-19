import ReturnPage from "../../components/ReturnPage";
import StickyHeadTable from "../../components/Table";
import * as S from "./styles";

const Receipts = () => {
    return (
        <S.ReceiptsContainer>
            <S.ReceiptsHeader>
                <ReturnPage/>
            </S.ReceiptsHeader>
            
            <StickyHeadTable></StickyHeadTable>
        </S.ReceiptsContainer>
    )
}

export default Receipts;