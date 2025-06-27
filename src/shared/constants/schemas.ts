import { z } from "zod";

export const addReceipt = z.object({
  almocos: z.number().min(0, "Número de almoços deve ser no mínimo 0."),
  quantidadeQuentinhas: z.number().min(0, "Número de quentinhas deve ser no mínimo 0."),
  sobremesas: z.number().min(0, "Número de sobremesas deve ser no mínimo 0."),
  bebidas: z.number().min(0, "Número de bebidas deve ser no mínimo 0."),
});


export const selectionOptionSchema = z.object({
  id: z.number(),
  label: z.string(),
  quantity: z.number().optional(),
  price: z.number().optional(),
  selecteds: z.number().optional(),
  editedPrice: z.boolean().optional(),
  newPrice: z.number().optional()
});