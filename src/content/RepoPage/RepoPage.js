import React from 'react';
import { Grid, Column } from '@carbon/react';
import RepoTable from './RepoTable';
import TablaSeveridad from './../../components/TablaSeveridad';
import InfoQuarter from './../../components/InfoQuarter';
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
];

const rows1 = [];

const RepoPage = () => {
  return (
    <Grid className="repo-page">
      <Column lg={4} className="repo-page__r1">
          <TablaSeveridad />
      </Column>
      <Column lg={4} className="repo-page__r1">
          <InfoQuarter />
      </Column>
      <Column lg={16} className="repo-page__r1">
        <RepoTable headers={headers1} rows={rows1} />
      </Column>
    </Grid>
  );
};

export default RepoPage;
