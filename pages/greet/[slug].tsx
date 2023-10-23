import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";
import styles from "./styles/styles.module.scss";

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
    <div className={`rootdiv`}>
      <div className={styles.content}>
        <p> Hello, {repo.name}!</p>
        <p> repo.description = {repo.description}!</p>
        <p> repo.fork = {repo.fork.toString()}!</p>
        <p> The test text </p>
      </div>
      <div onClick={goToGreetIndex}>
        <p>→ greet Index</p>
      </div>
      <Link href="/">→ home</Link>
    </div>
  );
}

export default Greet;
