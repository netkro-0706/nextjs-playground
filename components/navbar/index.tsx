import Link from "next/link";
import Widget from "../widget";
import styles from "./styles.module.scss";

function Navbar() {
  return (
    <div className={`${styles.navbar} rootdiv`}>
      <div className={styles.title}>Nextjs Playground</div>
      <div className={styles.nav_list}>
        <Link href="/greet/">
          <p>route variable - index</p>
        </Link>
        <Link href="/greet/[slug]" as="/greet/hello">
          <p>route variable - slug</p>
        </Link>
        <Link href="/contact-us">
          <p>contact-us</p>
        </Link>
        <Link href="/blog/[slug]" as="/blog/about-rottweiler">
          <p>blog</p>
        </Link>
        <Link href="/waktaverse">
          <p>waktaverse</p>
        </Link>
        <div className={styles.widget_box}>
          <Widget pageName="index" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
