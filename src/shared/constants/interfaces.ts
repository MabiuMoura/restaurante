export interface ISale {
  almocos: ISaleItem[];       
  bebidas: ISaleItem[];       
  sobremesas: ISaleItem[];    
  total: number;              
  formaPagamento: string;     
  quentinha: boolean;         
  quantidadeQuentinhas: number;
}

export interface ColumnTable {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right' | 'left' | 'center';
  format?: (value: any) => string;
};

export interface ISaleItem {
  id: number;            
  label: string;         
  quantity: number;      
  price: number;         
  editedPrice?: number;  
}

