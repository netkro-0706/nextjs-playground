import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.rootdiv}>
      <p>Hello nextjs</p>
      <Link href="/greet/">
        <p>route variable - index</p>
      </Link>
      <Link href="/greet/[slug]" as="/greet/hello">
        <p>route variable - slug</p>
      </Link>
    </div>
  );
};

export default Home;
