import React from 'react';
import GenericTable from '../../../../components/Table';
import type { ColumnTable, ISale, ISaleItem } from '../../../../shared/constants/interfaces';

const columns: ColumnTable[] = [
  {
    id: 'almocos',
    label: 'Almoços',
    minWidth: 70,
    align: 'center',
    format: (items: ISaleItem[]) =>
      items.reduce((sum, item) => sum + item.quantity, 0).toString(),
  },
  {
    id: 'quentinha',
    label: 'Quentinha',
    minWidth: 170,
    align: 'center',
    format: (value: boolean) => (value ? 'Sim' : 'Não'),
  },
  {
    id: 'quantidadeQuentinhas',
    label: 'Nº Quentinhas',
    minWidth: 170,
    align: 'center',
    format: (value: number) => value.toString(),
  },
  {
    id: 'bebidas',
    label: 'Bebidas',
    minWidth: 100,
    align: 'center',
    format: (items: ISaleItem[]) =>
      items.reduce((sum, item) => sum + item.quantity, 0).toString(),
  },
  {
    id: 'sobremesas',
    label: 'Sobremesas',
    minWidth: 170,
    align: 'center',
    format: (items: ISaleItem[]) =>
      items.reduce((sum, item) => sum + item.quantity, 0).toString(),
  },
  {
    id: 'total',
    label: 'Total',
    minWidth: 170,
    align: 'center',
    format: (value: number) =>
      `R$ ${value.toFixed(2).replace('.', ',')}`,
  },
  {
    id: 'formaPagamento',
    label: 'Forma de Pagamento',
    minWidth: 170,
    align: 'right',
    format: (value: string) => value,
  },
];


interface ReceiptsTableProps {
  Sales: ISale[];
}

const ReceiptsTable: React.FC<ReceiptsTableProps> = ({Sales}) => {
  return <GenericTable columns={columns} rows={Sales} />;
};

export default ReceiptsTable;
