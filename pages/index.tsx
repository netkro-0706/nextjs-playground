import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import Widget from "../components/widget";

const Home: NextPage = () => {
  return (
    <div className={styles.rootdiv}>
      <Head>
        <title>Nextjs Playground</title>
      </Head>

      <h1>Welcom to nextjs playground page</h1>
    </div>
  );
};

export default Home;
