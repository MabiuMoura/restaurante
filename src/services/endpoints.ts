import type { ISaleItem, ISale } from "../shared/constants/interfaces";
import { get, post, put, remove } from "./api";

export const Itens = {
    bebidas: {
        listar: () => 
            get<ISaleItem[]>("/itens/bebidas"),
    }
}

export const Sales = {
    listar: (params?: any): Promise<ISale[]> => 
        get("/pedidos", { params }).then((response) => response.data),

    cadastrar: (sale: ISale[]) => 
        post<ISale[]>("/sales", sale),

    editar: (id: number, sale: ISale) => 
        put<ISale>(`/sales/${id}`, sale),

    remover: (id: number) => 
        remove(`/sales/${id}`), 
}
    