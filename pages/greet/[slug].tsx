import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

interface Repo {
  name: string;
  description: string;
  fork: boolean;
}

export const getServerSideProps: GetServerSideProps<{ repo: Repo }> = async (
  context
) => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const repo = await res.json();
  return { props: { repo } };
};

function Greet(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { repo } = props;
  return (
    <div className={styles.rootdiv}>
      <h1> Hello, {repo.name}!</h1>
      <h1> repo.description = {repo.description}!</h1>
      <h1> repo.fork = {repo.fork.toString()}!</h1>
      <Link href="http://localhost:3000">go to home</Link>
    </div>
  );
}

export default Greet;
