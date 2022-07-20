import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>DiegoMendes</title>
        <meta name="Meu website" content="Meu curriculo" />
        <link rel="icon" href="/favicon.png" />
      </Head>
    </div>
  );
};

export default Home;
