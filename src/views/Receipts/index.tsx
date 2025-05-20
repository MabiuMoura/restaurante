import ReturnPage from "../../components/ReturnPage";
import ReceiptsTable from "./components/TableReceipts";
import * as S from "./styles";
import { MockedSales } from './Mock/datas';
import PageTitle from "../../components/PageTitle";



const Receipts = () => {
    return (
        <S.ReceiptsContainer>
            <S.ReceiptsHeader>
                <ReturnPage/>
                
                <PageTitle title="Vendas"/>
            </S.ReceiptsHeader>
            
            <S.ReceiptsTableContainer>
                <ReceiptsTable Sales={MockedSales} />
            </S.ReceiptsTableContainer>
            
        </S.ReceiptsContainer>
    )
}

export default Receipts;