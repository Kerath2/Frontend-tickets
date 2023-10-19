import React , {useEffect , useState} from 'react';
import { Octokit } from '@octokit/core';
import { Link ,Grid, Column, ColumnHang } from '@carbon/react';
import TablaSeveridad from './../../components/TablaSeveridad';
import InfoQuarter from './../../components/InfoQuarter';
import RepoTable from './../../components/RepoTable';
import './_repo-page.scss';
import { Row } from 'carbon-components-react';
import OpenCases from './../../components/OpenCases'
import TablaSev1 from './../../components/TablaSev1/'


const octokitClient = new Octokit({});

const headers = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'createdAt',
    header: 'Created',
  },
  {
    key: 'updatedAt',
    header: 'Updated',
  },
  {
    key: 'issueCount',
    header: 'Open Issues',
  },
  {
    key: 'stars',
    header: 'Stars',
  },
  {
    key: 'links',
    header: 'Links',
  },
];

const rows = [
  {
    id: '1',
    name: 'Repo 1',
    createdAt: 'Date',
    updatedAt: 'Date',
    issueCount: '123',
    stars: '456',
    links: 'Links',
  },
  {
    id: '2',
    name: 'Repo 2',
    createdAt: 'Date',
    updatedAt: 'Date',
    issueCount: '123',
    stars: '456',
    links: 'Links',
  },
  {
    id: '3',
    name: 'Repo 3',
    createdAt: 'Date',
    updatedAt: 'Date',
    issueCount: '123',
    stars: '456',
    links: 'Links',
  },
];


const LinkList = ({ url, homepageUrl }) => (
  <ul style={{ display: 'flex' }}>
    <li>
      <Link href={url}>GitHub</Link>
    </li>
    {homepageUrl && (
      <li>
        <span>&nbsp;|&nbsp;</span>
        <Link href={homepageUrl}>Homepage</Link>
      </li>
    )}
  </ul>
);



const getRowItems = (rows) =>
  rows.map((row) => ({
    ...row,
    key: row.id,
    stars: row.stargazers_count,
    issueCount: row.open_issues_count,
    createdAt: new Date(row.created_at).toLocaleDateString(),
    updatedAt: new Date(row.updated_at).toLocaleDateString(),
    links: <LinkList url={row.html_url} homepageUrl={row.homepage} />,
  }));

const RepoPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [rows, setRows] = useState([]);
  

  useEffect(() => {
    async function getCarbonRepos() {
      const res = await octokitClient.request('GET /orgs/{org}/repos', {
        org: 'carbon-design-system',
        per_page: 75,
        sort: 'updated',
        direction: 'desc',
      });

      if (res.status === 200) {
        setRows(getRowItems(res.data));
      } else {
        setError('Error obtaining repository data');
      }
      setLoading(false);
    }

    getCarbonRepos();
  }, []);


  if (loading) {
    return 'Loading...';
  }

  if (error) {
    return `Error! ${error}`;
  }
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
          <Column lg={4}>
            <TablaSev1/>
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
              <RepoTable headers={headers} rows={rows}/>
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
