import type { NextPage } from 'next';
import Head from 'next/head';
import HomeBar from '../components/Organisms/HomeBar';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>DiegoMendes</title>
        <meta name="Meu website" content="Meu curriculo" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <HomeBar />
    </div>
  );
};

export default Home;
