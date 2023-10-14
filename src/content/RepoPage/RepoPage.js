import React from 'react';
import { Grid, Column } from '@carbon/react';
import RepoTable from './RepoTable'; // Agrega esta importación
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
      <Column lg={8} className="repo-page__r1"> {/* Columna izquierda */}
        <RepoTable headers={headers2} rows={rows2} />
      </Column>
      <Column lg={8} className="repo-page__r1"> {/* Columna derecha */}
        <RepoTable headers={headers1} rows={rows1} />
      </Column>
    </Grid>
  );
};

export default RepoPage;
