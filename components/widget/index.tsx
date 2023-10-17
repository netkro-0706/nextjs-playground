import Head from "next/head";
import { useState } from "react";

type WidgetProps = {
  pageName: string;
};

function Widget({ pageName }: WidgetProps) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <>
        <Head>
          <title>{pageName} page</title>
        </Head>
        <div>
          <button onClick={() => setActive(false)}>
            Restore original title
          </button>
          Take a look at the title!
        </div>
      </>
    );
  }

  return (
    <>
      <button onClick={() => setActive(true)}>Change page title</button>
    </>
  );
}

export default Widget;
