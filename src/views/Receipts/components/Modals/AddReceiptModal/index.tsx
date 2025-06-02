import { set, useForm} from 'react-hook-form';
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { addReceipt } from '../../../../../shared/constants/schemas';
import CommonInput from '../../../../../components/Inputs/CommonInput';
import * as S from './styles';
import MultiSelectionDropdown from '../../../../../components/Dropdowns/MultiSelectionDropdown';
import { useEffect, useState } from 'react';
import { MockedDrinks, MockedLunch } from '../../../Mock/datas';
import CustomizedPriceInput from '../../../../../components/Inputs/CustomizedPriceInput';
import { Itens } from '../../../../../services/endpoints';
import type { ISelectionOption } from '../../../../../shared/constants/interfaces';

const AddReceiptModal = () => {
    const [drinks, setDrinks] = useState<ISelectionOption[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm({ resolver: zodResolver(addReceipt),
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
            <MultiSelectionDropdown 
                options={MockedLunch} 
                selectedOptions={[]}
                label='Defina os Almoços' >
                
            </MultiSelectionDropdown>
            <MultiSelectionDropdown 
                options={drinks} 
                selectedOptions={[]}
                label='Selecione as Bebidas' >
                
            </MultiSelectionDropdown>

            <CommonInput
                label="Sobremesas"
                name="sobremesas"
                type="number"
                placeholder="Quantidade de sobremesas"
                inputRef={register("sobremesas", { valueAsNumber: true }).ref}
                onChange={register("sobremesas").onChange}
                onBlur={register("sobremesas").onBlur}
                errorMessage={errors.sobremesas?.message}
            />

            <button type="submit">Enviar</button>
                </S.Form>
    )
}

export default AddReceiptModal;