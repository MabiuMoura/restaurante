import type { ISelectionOption } from "../shared/constants/interfaces";
import { get, post, put, remove } from "./api";

export const Itens = {
    bebidas: {
        listar: () => get<ISelectionOption[]>("/itens/bebidas"),
    }
}