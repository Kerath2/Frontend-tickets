import React from 'react';
import { Grid, Column, ColumnHang } from '@carbon/react';
import RepoTable from './RepoTable';
import TablaSeveridad from './../../components/TablaSeveridad';
import InfoQuarter from './../../components/InfoQuarter';
import './_repo-page.scss';
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

// const RepoPage = () => {
//   return (
//     <Grid className="repo-page">
//       <Column lg={16} className="repo-page__r1">
//       <div className='container'>
//     <TablaSeveridad/>    
//     <InfoQuarter/>
//     <InfoQuarter/>
//     </div>
//       </Column>
//       <Column lg={16} className="repo-page__r1">
//         <RepoTable headers={headers1} rows={rows1} />
//       </Column>
//     </Grid>
//   );
// };

const RepoPage = () => {
  return (
    <Grid>
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
          <Column lg={4}>
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
