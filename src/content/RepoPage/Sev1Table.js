import React from 'react';
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from '@carbon/react';


const headers = [
  {
    key: 'severidad',
    header: 'Severidad',
  },
  {
    key: 'cantidad',
    header: '1',
  },
];

const rows = [
  {
    id: 'row0',
    severidad: '0 a 7 días',
    cantidad : '3'
  },
  {
    id: 'row1',
    severidad: '7 a 15 días',
    cantidad : '2'
  },
  {
    id: 'row2',
    severidad: '15 a 30 días',
    cantidad : '2'
  },
  {
    id: 'row3',
    severidad: '30 a 60 días',
    cantidad : '2'
  },
  // Agrega más filas aquí con datos ficticios

]


const Sev1Table= ()=> {
  return (
    <DataTable
      rows={rows}
      headers={headers}
      render={({ rows, headers, getHeaderProps, getRowProps }) => (
        <TableContainer title="Tickets">
          <Table size="compact">
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableHeader {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow {...getRowProps({ row })}>
                  {row.cells.map((cell) => (
                    <TableCell key={cell.id}>{cell.value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    />
  );
};


export default Sev1Table;


