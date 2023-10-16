import React from 'react';
import { Grid, Column } from '@carbon/react';
import RepoTable from './RepoTable'; // Agrega esta importación
import Sev1Table from './Sev1Table';
import CustomTable from './TablaCustom';
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
        {/* <Sev1Table headers={headers2} rows={rows2} /> */}
        <CustomTable/>
      </Column>
      <Column lg={4} className="repo-page__r1"> {/* Columna derecha para el primer conjunto de párrafos */}
        <div className="text-above-table-right text-above-table-margin">
          <p className = "texto1">3Q 2023 comité actual</p>
          <p>Cantidad Tickets Severidad 1: <strong>1</strong></p>
          <p>Tiempo Promedio 1era Atención: <strong>59.7 mins </strong></p>
          <p>Promedio Días Resolución: <strong>5 días</strong></p>
        </div>
      </Column>
      <Column lg={4} className="repo-page__r1"> {/* Columna derecha para el segundo conjunto de párrafos */}
        <div className="text-above-table-right text-above-table-margin">
          <p className='texto1'>1Q 2023 comité anterior</p>
          <p>Cantidad Tickets Severidad 1: <strong>14</strong></p>
          <p>Tiempo Promedio 1era Atención: <strong>41 mins</strong></p>
          <p>Promedio Días Resolución: <strong>7 días</strong></p>
        </div>
      </Column>
      <Column lg={16} className="repo-page__r1"> {/* Columna derecha para la segunda tabla */}
        <RepoTable headers={headers1} rows={rows1} />
      </Column>
    </Grid>
  );
};
export default RepoPage;
