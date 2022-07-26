import { Grid } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Organisms/Footer';
import HomeBar from '../components/Organisms/HomeBar';
import StatusQualities from '../components/Organisms/StatusQualities';

const Home: NextPage = () => {
  return (
    <Grid
      display="flex"
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={10}
    >
      <Head>
        <title>DiegoMendes</title>
        <meta name="Meu website" content="Meu curriculo" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <HomeBar />
      <StatusQualities />
      <Footer />
    </Grid>
  );
};

export default Home;
