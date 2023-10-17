import React, { useState } from 'react';
import './_repo-table.scss';
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  Pagination,
} from '@carbon/react';

import { headers, rows } from './tableData';
import './_repo-table.scss';

const RepoTable = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handlePageSizeChange = (newPageSize) => {
    setPageSize(newPageSize);
    setPage(1);
  };

  const allRows = rows; // Todos los datos

  const paginatedRows = allRows.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div id="container">
      <DataTable
        rows={paginatedRows}
        headers={headers}
        render={({ rows, headers, getHeaderProps, getRowProps }) => (
          <div>
            <TableContainer>
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
            <Pagination
              backwardText="Previous page"
              forwardText="Next page"
              itemsPerPageText="Items per page:"
              page={page}
              pageSize={pageSize}
              pageSizes={[3, 5, 30, 40, 50]}
              totalItems={allRows.length} // Usa la longitud de todos los datos
              onChange={(e) => {
                handlePageChange(e.page);
                handlePageSizeChange(e.pageSize);
              }}
              size="md"
            />
          </div>
        )}
      />
    </div>
  );
};

export default RepoTable;
