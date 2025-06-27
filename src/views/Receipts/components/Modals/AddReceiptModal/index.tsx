import { Controller, useForm} from 'react-hook-form';
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { addReceipt } from '../../../../../shared/constants/schemas';
import * as S from './styles';
import MultiSelectionDropdown from '../../../../../components/Dropdowns/MultiSelectionDropdown';
import { useEffect, useState } from 'react';
import { MockedLunch } from '../../../Mock/datas';
import { Itens } from '../../../../../services/endpoints';
import type { ISaleItem } from '../../../../../shared/constants/interfaces';
import { saleValues } from '../../../../../shared/constants/defaultValues';

const AddReceiptModal = () => {
    const [drinks, setDrinks] = useState<ISaleItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const { register, control, handleSubmit, formState: { errors }} = useForm({
        defaultValues: saleValues
    });

    const fetchDrinks = async () => {
        setLoading(true);
        try {
            console.log("Buscando bebidas...");
            const response = await Itens.bebidas.listar();
            setDrinks(response);
        } catch (error) {
            console.error("Erro ao buscar bebidas:", error);
            toast.error("Erro ao buscar bebidas.");
        }
    }

    useEffect(() => {
        fetchDrinks();
    }, []);

    const onSubmit = (data: any) => {
        console.log(data);
        toast.success("Recibo adicionado com sucesso!");
    };

    return (
        <S.Form  onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="bebidas"
                control={control}
                defaultValue={saleValues.bebidas}
                render={({ field }) => (
                    <MultiSelectionDropdown
                    label="Selecione as Bebidas"
                    options={drinks}
                    value={field.value}
                    onChange={field.onChange}
                    />
                )}
            />
            <Controller
                name="bebidas"
                control={control}
                defaultValue={saleValues.bebidas}
                render={({ field }) => (
                    <MultiSelectionDropdown 
                        label="Selecione os Almoços"
                        options={MockedLunch}
                        value={field.value}
                        onChange={field.onChange}
                    />
                )}
            />
            <Controller
                name="sobremesas"
                control={control}
                defaultValue={saleValues.bebidas}
                render={({ field }) => (
                    <MultiSelectionDropdown 
                        label="Selecione as Sobremesas"
                        options= {[{
                                    id: 0, label: 'Sobremesa', quantity: 0, price: 0,  editedPrice: 0
                                }]}
                        value={field.value}
                        onChange={field.onChange}
                    />
                )}
            />
            <button type="submit">Enviar</button>
        </S.Form>
    )
}

export default AddReceiptModal;