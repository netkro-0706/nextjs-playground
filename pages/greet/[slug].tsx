import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { useCallback } from "react";

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

function Greet({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  const goToGreetIndex = useCallback(() => {
    router.push({
      pathname: "http://localhost:3000/greet",
    });
  }, []);

  return (
    <div className={styles.rootdiv}>
      <h3> Hello, {repo.name}!</h3>
      <h3> repo.description = {repo.description}!</h3>
      <h3> repo.fork = {repo.fork.toString()}!</h3>
      <div onClick={goToGreetIndex}>
        <p>→ greet Index</p>
      </div>
      <Link href="http://localhost:3000">→ home</Link>
    </div>
  );
}

export default Greet;
