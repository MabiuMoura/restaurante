import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import { TableCell, TableRow } from '@mui/material';

export const TableWrapper = styled(Paper)`
  width: 100%;
  overflow: hidden;
    

  table {
    border-collapse: collapse;
  }

  th, td {
    padding: 8px;
    font-size: 14px;
  }

  th {
    background-color: #f4f4f4;
    font-weight: bold;
  }

  tr:hover {
    background-color: #f9f9f9;
  }
`;

export const StyledTableRow = styled(TableRow)`
  &:hover {
    background-color: red;
  }
`;