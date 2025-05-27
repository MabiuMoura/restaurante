import {Form, useForm} from 'react-hook-form';
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { addReceipt } from '../../../../../shared/constants/schemas';
import CommonInput from '../../../../../components/CommonInput';
import * as S from './styles';


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
            <CommonInput
                label="Almoços"
                name="almocos"
                type="number"
                placeholder="Quantidade de almoços"
                inputRef={register("almocos", { valueAsNumber: true }).ref}
                onChange={register("almocos").onChange}
                onBlur={register("almocos").onBlur}
                errorMessage={errors.almocos?.message}
            />
            <CommonInput
                label="Quentinhas"
                name="quentinhas"
                type="number"
                placeholder="Quantidade de quentinhas"
                inputRef={register("quentinhas", { valueAsNumber: true }).ref}
                onChange={register("quentinhas").onChange}
                onBlur={register("quentinhas").onBlur}
                errorMessage={errors.quentinhas?.message}
            />

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

            <CommonInput
                label="Bebidas"
                name="bebidas"
                type="number"
                placeholder="Quantidade de bebidas"
                inputRef={register("bebidas", { valueAsNumber: true }).ref}
                onChange={register("bebidas").onChange}
                onBlur={register("bebidas").onBlur}
                errorMessage={errors.bebidas?.message}
            />

            <button type="submit">Enviar</button>
                </S.Form>
    )
}

export default AddReceiptModal;