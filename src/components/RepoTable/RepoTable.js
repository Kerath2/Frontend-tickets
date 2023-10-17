import React from 'react';
import './_repo-table.scss'
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

import {headers, rows} from './tableData'



const RepoTable = ()=> {
  return (
    <div id='container'> 
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


    </div>
  );
};


export default RepoTable;

