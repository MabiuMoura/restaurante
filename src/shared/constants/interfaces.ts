export interface ISales {
    almocos: number;
    bebidas: number;
    sobremesas: number;
    total: number;
    formaPagamento: string;
};

export interface ColumnTable {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right' | 'left' | 'center';
  format?: (value: any) => string;
}
