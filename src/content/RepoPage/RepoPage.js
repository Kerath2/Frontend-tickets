import React from 'react';
import { Grid, Column } from '@carbon/react';
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
    <Grid className="repo-page">
        <Column lg = {15}>
        <OpenCases/>
        </Column>
            <Column lg={4}> 
                <TablaSeveridad/>
            </Column>
            <Column lg ={12}> 
                <Row> 
                     <Column>
                        <div id='tarjetas'>
                            <InfoQuarter/>
                            <InfoQuarter/>
                        </div>
                    </Column>
                </Row>
                <Row>
                   <RepoTable/> 
                </Row>
            </Column>
    </Grid>
  );
};
export default RepoPage;
