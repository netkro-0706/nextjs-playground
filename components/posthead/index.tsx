import Head from "next/head";

type PostHeadProps = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  image: string;
};

function PostHead(props: PostHeadProps) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.subtitle} />

      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.subtitle} />
      <meta property="og:image" content={props.image} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.subtitle} />
      <meta name="twitter:image" content={props.image} />
    </Head>
  );
}

export default PostHead;
