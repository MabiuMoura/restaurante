import ReturnPage from "../../components/ReturnPage";
import ReceiptsTable from "./components/TableReceipts";
import * as S from "./styles";
import { MockedSales } from './Mock/datas';
import PageTitle from "../../components/PageTitle";
import ComboBox from "../../components/ComboBox";
import { useState } from "react";
import SwitchButton from "../../components/SwitchButton";
import CommonButton from "../../components/CommonButton";
import Modal from "../../components/Modal";
import AddReceiptModal from "./components/Modals/AddReceiptModal";

const Receipts = () => {
    const [hasQuentinha, setHasQuentinha] = useState(false);
    const [hasSobremesa, setHasSobremesa] = useState(false);

    const [formaPagamento, setFormaPagamento] = useState('Todas');
    const formasPagamento = ['Credito', 'Debito', 'Pix', 'Dinheiro'];

    const [ModalOpen, setModalOpen] = useState(false);
    const handleModalOpen = () => {
        setModalOpen(true);
    }

    return (
        <S.ReceiptsContainer>
            <S.ReceiptsHeader>
                <ReturnPage/>
                <PageTitle title="Vendas"/>
            </S.ReceiptsHeader>
            <S.ReceiptsSearchContainer>
                <S.SearchFiltersContainer>
                    <SwitchButton
                        title="Teve Quentinha"
                        checked={hasQuentinha} 
                        onChange={(value) => setHasQuentinha(value)} />

                    <SwitchButton
                        title="Teve Sobremesa"
                        checked={hasSobremesa} 
                        onChange={(value) => setHasSobremesa(value)} />

                    <ComboBox
                        title="Forma de Pagamento"
                        options={formasPagamento}
                        selected={formaPagamento}
                        onChange={setFormaPagamento}
                        defaultOption="Nenhum" />

                </S.SearchFiltersContainer>
                <S.OpenModalButtonContainer>
                    <CommonButton onClick={handleModalOpen} title="Cadastrar Venda" />
                </S.OpenModalButtonContainer>
                
                <Modal title="Cadastrar Venda" width="900px" onClose={() => setModalOpen(false)} isOpen={ModalOpen}>
                    <AddReceiptModal></AddReceiptModal>
                </Modal>
            </S.ReceiptsSearchContainer>
            
            <S.ReceiptsTableContainer>
                <ReceiptsTable Sales={MockedSales} />
            </S.ReceiptsTableContainer>
            
        </S.ReceiptsContainer>
    )
}

export default Receipts;