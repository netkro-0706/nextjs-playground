import Document, { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => (
  <Html>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Nextjs Playground</title>
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
