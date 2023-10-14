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
      <Column lg={3} className="repo-page__r1"> {/* Columna izquierda */}
        <Sev1Table headers={headers2} rows={rows2} />
      </Column>
      <Column lg={4} className="repo-page__r1"> {/* Columna derecha para el primer conjunto de párrafos */}
        <div className="text-above-table-right text-above-table-margin">
          <p className = "texto1">3Q 2023 comité actual</p>
          <p>Cantidad Tickets Severidad 1: 1</p>
          <p>Tiempo Promedio 1era Atención: 59.7 mins</p>
          <p>Promedio Días Resolución: 5 días</p>
        </div>
      </Column>
      <Column lg={4} className="repo-page__r1"> {/* Columna derecha para el segundo conjunto de párrafos */}
        <div className="text-above-table-right text-above-table-margin">
          <p>1Q 2023 comité anterior</p>
          <p>Cantidad Tickets Severidad 1: 14</p>
          <p>Tiempo Promedio 1era Atención: 41 mins</p>
          <p>Promedio Días Resolución: 7 días</p>
        </div>
      </Column>
      <Column lg={16} className="repo-page__r1"> {/* Columna derecha para la segunda tabla */}
        <RepoTable headers={headers1} rows={rows1} />
      </Column>
    </Grid>
  );
};
export default RepoPage;
