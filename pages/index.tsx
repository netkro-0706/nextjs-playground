import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className={styles.rootdiv}>
      <Head>
        <title>Nextjs Playground</title>
      </Head>

      <p>Hello nextjs</p>
      <Link href="/greet/">
        <p>route variable - index</p>
      </Link>
      <Link href="/greet/[slug]" as="/greet/hello">
        <p>route variable - slug</p>
      </Link>
      <Link href="/contact-us">
        <p>contact-us</p>
      </Link>
      <Link href="/waktaverse">
        <p>waktaverse</p>
      </Link>
    </div>
  );
};

export default Home;
