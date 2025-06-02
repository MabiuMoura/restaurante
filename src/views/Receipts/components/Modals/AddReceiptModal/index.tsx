import { useForm} from 'react-hook-form';
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { addReceipt } from '../../../../../shared/constants/schemas';
import CommonInput from '../../../../../components/Inputs/CommonInput';
import * as S from './styles';
import MultiSelectionDropdown from '../../../../../components/Dropdowns/MultiSelectionDropdown';
import { useState } from 'react';
import { MockedDrinks, MockedLunch } from '../../../Mock/datas';
import CustomizedPriceInput from '../../../../../components/Inputs/CustomizedPriceInput';


const AddReceiptModal = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm({ resolver: zodResolver(addReceipt),
    });

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
                options={MockedDrinks} 
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