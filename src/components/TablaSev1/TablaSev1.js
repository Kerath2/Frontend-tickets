import React from 'react';
import {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
} from '@carbon/react';

import { headers, rows } from './TableData'; // Importa tus datos

const TablaSev1 = () => {
  return (
    <div id='container'>
      <StructuredListWrapper>
        <StructuredListHead>
          <StructuredListRow head>
            {headers.map((header) => (
              <StructuredListCell key={header.key} head>
                {header.header}
              </StructuredListCell>
            ))}
          </StructuredListRow>
        </StructuredListHead>
        <StructuredListBody>
          {rows.map((row) => (
            <StructuredListRow key={row.id}>
              <StructuredListCell>
                {row.severidad}
              </StructuredListCell>
              <StructuredListCell>
                {row.cantidad}
              </StructuredListCell>
            </StructuredListRow>
          ))}
        </StructuredListBody>
      </StructuredListWrapper>
    </div>
  );
};

export default TablaSev1;
