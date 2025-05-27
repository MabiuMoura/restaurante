import { z } from "zod";

export const addReceipt = z.object({
  almocos: z.number().min(0, "Número de almoços deve ser no mínimo 0."),
  quentinhas: z.number().min(0, "Número de quentinhas deve ser no mínimo 0."),
  sobremesas: z.number().min(0, "Número de sobremesas deve ser no mínimo 0."),
  bebidas: z.number().min(0, "Número de bebidas deve ser no mínimo 0."),
});