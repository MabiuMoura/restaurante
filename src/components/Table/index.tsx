import * as React from 'react';
import { Table,
   TableCell, 
   TableHead, 
   TableRow, 
   TableBody, 
   TableContainer, 
   TablePagination,
   Paper } from '@mui/material';
import type { ColumnTable } from '../../shared/constants/interfaces';
import * as S from './styles';


interface GenericTableProps {
  columns: ColumnTable[];
  rows: any[];
  rowsPerPageOptions?: number[];
  maxHeight?: number;
}

const GenericTable: React.FC<GenericTableProps> = ({
  columns,
  rows,
  rowsPerPageOptions = [10, 25, 100],
  maxHeight = 668,
}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(rowsPerPageOptions[0]);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%',
                 overflow: 'hidden',
                 backgroundColor: '#1991C5',
                }}>
      <TableContainer sx={{ maxHeight,  }}> 
        <Table stickyHeader aria-label="generic table"
          sx={{ 
              
           }}>
          <TableHead sx={{}} >
            <TableRow >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{ minWidth: column.minWidth,
                        backgroundColor: '#134D5A',
                        border: '1px solid #134D5A',
                        fontSize: '17px',
                        fontWeight: '600',
                       }} 
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={index} sx={{
                  backgroundColor: '#20698E',

                }}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align} 
                        sx={{
                            border: '0px',
                            borderRadius: '0px',
                            fontSize: '15px',
                            fontWeight: '500',
                        }}>
                        {column.format ? column.format(value) : typeof value === 'boolean' ? (value ? 'Sim' : 'Não') : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{
          backgroundColor: '#134D5A', 
          fontSize: '18px',
          fontWeight: '600',
        }}
      />
    </Paper>
  );
};

export default GenericTable;
