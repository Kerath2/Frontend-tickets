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



import './_tabla-sev1.scss'
import {headers, rows} from './TableData'
import './_tabla-sev1.scss'

const TablaSev1 = () => {
  return (
    <div id='container'> 
        <DataTable
          rows={rows}
          headers={headers}
          render={({ rows, headers, getHeaderProps, getRowProps }) => (
            <TableContainer >
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
                        <TableCell key={cell.id} id = 'celda'>{cell.value}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        />
    </div>
  );
}


export default TablaSev1;
