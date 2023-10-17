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
  Pagination
} from '@carbon/react';

import { headers, rows } from './tableData';
import './_repo-table.scss';

const RepoTable = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handlePageSizeChange = (newPageSize) => {
    setPageSize(newPageSize);
  };

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedRows = rows.slice(startIndex, endIndex);

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
              pageSizes={[3, 5 , 30, 40, 50]}
              totalItems={rows.length}
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
