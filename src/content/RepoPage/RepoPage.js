import React from 'react';
import { Grid, Column, ColumnHang } from '@carbon/react';
import TablaSeveridad from './../../components/TablaSeveridad';
import InfoQuarter from './../../components/InfoQuarter';
import RepoTable from './../../components/RepoTable';
import './_repo-page.scss';
import { Row } from 'carbon-components-react';
import OpenCases from './../../components/OpenCases'
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
    <Grid id='gridGrande'>
      <Column lg={16}>
        <OpenCases/>
      </Column>
      <Column Lg={16}>
        <div id='espacio_vacio'>
        </div>
      </Column>
      <Column lg={16}>
        <div id='severidad_1'> 
        <Grid>
          <Column lg={3}>
            <TablaSeveridad/>
          </Column>
          <Column lg={12}>
            <Grid >
              <Column lg={16}>
              <Grid condensed>
                <Column lg={7}>
                <InfoQuarter/>
                </Column>
                <Column lg={7}>
                <InfoQuarter/>
                </Column>
                <Column lg={2}>
                </Column>
              </Grid>
              </Column>
              <Column lg={16}>
              <RepoTable/>
              </Column>
            </Grid>
          </Column>
        </Grid>
        </div>
      </Column>
    </Grid>
    
  );
};
export default RepoPage;
