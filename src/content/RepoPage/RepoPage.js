import React from 'react';
import { Grid, Column } from '@carbon/react';
import RepoTable from './RepoTable'; // Agrega esta importación
import Sev1Table from './Sev1Table';
import './_repo-page.scss';

const headers1 = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'createdAt',
    header: 'Created',
  },
  // Agrega más cabeceras según tus necesidades
];

const headers2 = [
  // Cabeceras para la segunda tabla
];

const rows1 = [
  // Datos para la primera tabla
];

const rows2 = [
  // Datos para la segunda tabla
];


const RepoPage = () => {
  return (
    <Grid className="repo-page">
      <Column lg={2} className="repo-page__r1"> {/* Columna izquierda */}
        <Sev1Table headers={headers2} rows={rows2} />
      </Column>
      <Column lg={12} className="repo-page__r1"> {/* Columna derecha */}
        <div className="text-above-table">
          <p>Texto encima de la tabla </p>
        </div>
        <RepoTable headers={headers1} rows={rows1} />
      </Column>
    </Grid>
  );
};
export default RepoPage;
