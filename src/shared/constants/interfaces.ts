export interface ISales {
    almocos: number;
    bebidas: number;
    sobremesas: number;
    total: number;
    formaPagamento: string;
    quentinha: boolean;
    quantidadeQuentinhas: number;
};

export interface ColumnTable {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right' | 'left' | 'center';
  format?: (value: any) => string;
};

export interface ISelectionOption {
  id: number;
  label: string;
  quantity: number;
  price?: number;
  selecteds: number;
  editedPrice?: boolean;
  newPrice?: number; 
}
