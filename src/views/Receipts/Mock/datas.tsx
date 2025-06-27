import type { ISale, ISaleItem } from "../../../shared/constants/interfaces";


export const MockedSales : ISale[] = [
  {
    almocos: [{ id: 0, label: "Almoço", quantity: 1, price: 18.90 }],
    bebidas: [{ id: 10, label: "Suco", quantity: 1, price: 5.00 }],
    sobremesas: [],
    total: 23.90,
    formaPagamento: "credito",
    quentinha: false,
    quantidadeQuentinhas: 0,
  },
  {
    almocos: [
      { id: 0, label: "Almoço", quantity: 2, price: 18.90 },
      { id: 2, label: "Almoço Especial", quantity: 2, price: 25.00 },
    ],
    bebidas: [{ id: 10, label: "Refrigerante", quantity: 2, price: 6.00 }],
    sobremesas: [{ id: 20, label: "Pudim", quantity: 1, price: 7.00 }],
    total: 119.80,
    formaPagamento: "debito",
    quentinha: false,
    quantidadeQuentinhas: 0,
  },
  {
    almocos: [{ id: 1, label: "Quentinha", quantity: 4, price: 18.90 }],
    bebidas: [{ id: 10, label: "Refrigerante", quantity: 2, price: 6.00 }],
    sobremesas: [],
    total: 89.60,
    formaPagamento: "credito",
    quentinha: true,
    quantidadeQuentinhas: 2,
  },
  {
    almocos: [
      { id: 0, label: "Almoço", quantity: 3, price: 18.90 },
      { id: 2, label: "Almoço Especial", quantity: 1, price: 25.00 },
    ],
    bebidas: [{ id: 10, label: "Suco", quantity: 2, price: 5.00 }],
    sobremesas: [{ id: 20, label: "Brigadeiro", quantity: 1, price: 4.00 }],
    total: 96.60,
    formaPagamento: "debito",
    quentinha: true,
    quantidadeQuentinhas: 1,
  },
  // mais entradas semelhantes se desejar
];


export const MockedLunch: ISaleItem[] = [
  { id: 0, label: "Almoço", quantity: 0, price: 18.90 },
  { id: 1, label: "Quentinha", quantity: 0, price: 18.90 },
  { id: 2, label: "Almoço Especial", quantity: 0, price: 25.00 },
];