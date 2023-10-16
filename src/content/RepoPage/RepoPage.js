import React from 'react';
import { Grid, Column } from '@carbon/react';
import RepoTable from './RepoTable';
import TablaSeveridad from './../../components/TablaSeveridad';
import InfoQuarter from './../../components/InfoQuarter';
import { Row } from 'carbon-components-react';
import OpenCases from './../../components/OpenCases'
import './_repo-page.scss'
const headers1 = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'createdAt',
    header: 'Created',
  },
];

const rows1 = [];


const RepoPage = () => {
  return (
    <Grid id="repo-page">
      <Column lg={16}>
        <OpenCases />
      </Column>
      <Column lg={4}>
        <TablaSeveridad />
      </Column>
      <Column lg={12}>
        <div id='tarjetas'>
          <InfoQuarter />
          <InfoQuarter />
        </div>
      </Column>
      <Column lg = {16}>
        <RepoTable />
      </Column>
    </Grid>
  );
};

export default RepoPage;
