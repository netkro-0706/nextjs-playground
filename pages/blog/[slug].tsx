import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import PostHead from "../../components/posthead";
import posts from "../../data/posts";

type Props = {
  post: {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    image: string;
  };
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { slug } = context.query;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return { props: { post } };
};

function Post({
  post,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  return (
    <div className={styles.rootdiv}>
      <div>
        <PostHead {...post} />
        <h1>{post.title}</h1>
        <p>{post.subtitle}</p>
      </div>
      <Link href="/">→ home</Link>
    </div>
  );
}

export default Post;
