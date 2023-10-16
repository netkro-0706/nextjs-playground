import { useRouter } from "next/router";
import { useCallback } from "react";
import styles from "../../styles/Home.module.css";

function Page() {
  const route = useRouter();
  const onClickToHome = useCallback(() => {
    route.push({
      pathname: "http://localhost:3000",
    });
  }, []);

  return (
    <div className={styles.rootdiv}>
      <p>This is Greets Index page</p>
      <div onClick={onClickToHome}>
        <p>Back to Home</p>
      </div>
    </div>
  );
}

export default Page;
