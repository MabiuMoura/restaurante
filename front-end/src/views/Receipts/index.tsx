import ReturnPage from "../../components/ReturnPage";
import ReceiptsTable from "./components/TableReceipts";
import * as S from "./styles";
import PageTitle from "../../components/PageTitle";
import ComboBox from "../../components/ComboBox";
import { use, useCallback, useEffect, useState } from "react";
import SwitchButton from "../../components/SwitchButton";
import CommonButton from "../../components/CommonButton";
import Modal from "../../components/Modal";
import AddReceiptModal from "./components/Modals/AddReceiptModal";
import { set } from "react-hook-form";
import { Sales } from "../../services/endpoints";
import type { ISale } from "../../shared/constants/interfaces";

const Receipts = () => {
    const [hasQuentinha, setHasQuentinha] = useState(false);
    const [hasSobremesa, setHasSobremesa] = useState(false);

    const [formaPagamento, setFormaPagamento] = useState('Todas');
    const formasPagamento = ['Credito', 'Debito', 'Pix', 'Dinheiro'];

    const [selectedOption, setSelectedOption] = useState<string>("AZ");

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const [ModalOpen, setModalOpen] = useState(false);

    const [SalesData, setSalesData] = useState<ISale[]>([]);

    const handleModalOpen = () => {
        setModalOpen(true);
    }

    const fetchSales = async () => {
        console.log("Buscando vendas");
        try {
            setLoading(true);
            const params: any = {};

            if (selectedOption === "AZ") {
                params.order = { name: "ASC" };
            } else if (selectedOption === "ZA") {
                params.order = { name: "DESC" };
            } else if (selectedOption === "newest") {
                params.order = { memberSince: "DESC" };
            } else if (selectedOption === "oldest") {
                params.order = { memberSince: "ASC" };
            }

            const response = await Sales.listar(params);
            setSalesData(response);
        } catch (err) {
            console.error("Erro ao buscar vendas:", err);
            setError("Erro ao buscar vendas");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSales();
    }, []);

    const handleSalesAdded = useCallback(() => {
        fetchSales();
    }, [fetchSales]);

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
                    <AddReceiptModal />
                </Modal>
            </S.ReceiptsSearchContainer>
            
            <S.ReceiptsTableContainer>
                <ReceiptsTable Sales={SalesData} />
            </S.ReceiptsTableContainer>
            
        </S.ReceiptsContainer>
    )
}

export default Receipts;