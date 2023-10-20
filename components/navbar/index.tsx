import Link from "next/link";
import Widget from "../widget";
import styles from "../styles/Home.module.css";

function Navbar() {
  return (
    <div className="navbar rootdiv">
      <div>Nextjs Playground</div>
      <div className="nav-list">
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
        <div className="widget-box">
          <Widget pageName="index" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
