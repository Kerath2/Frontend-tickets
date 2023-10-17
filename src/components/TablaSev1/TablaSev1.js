import React from 'react';
import {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
} from '@carbon/react';

import { headers, rows } from './TableData'; // Importa tus datos
import './_tabla-sev1.scss'

const TablaSev1 = () => {
  return (
    <div id='container'>
      <StructuredListWrapper>
        <StructuredListHead>
          <StructuredListRow head>
            {headers.map((header) => (
              <StructuredListCell key={header.key} head id='titulo'>
                {header.header}
              </StructuredListCell>
            ))}
          </StructuredListRow>
        </StructuredListHead>
        <StructuredListBody>
          {rows.map((row) => (
            <StructuredListRow key={row.id} >
              <StructuredListCell id={row.id}>
                {row.severidad}
              </StructuredListCell>
              <StructuredListCell id="otros">
                {row.cantidad }
              </StructuredListCell>
            </StructuredListRow>
          ))}
        </StructuredListBody>
      </StructuredListWrapper>
    </div>
  );
};

export default TablaSev1;
