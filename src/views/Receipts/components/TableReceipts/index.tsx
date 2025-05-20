import React from 'react';
import GenericTable from '../../../../components/Table';
import type { ColumnTable, ISales } from '../../../../shared/constants/interfaces';

const columns: ColumnTable[] = [
  { id: 'almocos', label: 'Almoços', minWidth: 70, align: 'center', },
    {
    id: 'quentinha',
    label: 'Quentinha',
    minWidth: 170,
    align: 'center',

  },
    {
    id: 'quantidadeQuentinhas',
    label: 'Nº Quentinhas',
    minWidth: 170,
    align: 'center',
  },
  { id: 'bebidas', label: 'Bebidas', minWidth: 100, align: 'center',  },
  {
    id: 'sobremesas',
    label: 'Sobremesas',
    minWidth: 170,
    align: 'center',
    format: (value: number) => value.toLocaleString('pt-BR'),
  },
  {
    id: 'total',
    label: 'Total',
    minWidth: 170,
    align: 'center',

  },
  {
    id: 'formaPagamento',
    label: 'Forma de Pagamento',
    minWidth: 170,
    align: 'right',
  },
];

interface ReceiptsTableProps {
  Sales: ISales[];
}

const ReceiptsTable: React.FC<ReceiptsTableProps> = ({Sales}) => {
  return <GenericTable columns={columns} rows={Sales} />;
};

export default ReceiptsTable;
