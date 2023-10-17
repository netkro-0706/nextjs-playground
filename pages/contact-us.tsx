import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

function ContactPage() {
  return (
    <div>
      <Head>
        <title>Nextjs Playground</title>
      </Head>

      <div>
        <ul className="non-style-list">
          <li>
            <Link href="http://localhost:3000">←</Link>
          </li>
          <li>Email: mymail@example.com</li>
          <li>name: name</li>
        </ul>
      </div>

      <div style={{ width: 800, height: 600, position: "relative" }}>
        <Image
          src="https://cafeptthumb-phinf.pstatic.net/MjAyMTEyMDNfNCAg/MDAxNjM4NTI4NTk0MTY1.Uyn_V2bNbjqmYsNYCFakvlAjH3qX0RZh32hLkNY1Tj0g.GCS_txWjJJLE559PlvAAC8Vk5aerH5AgSSo-QTJGJlUg.PNG/67.1.png?type=w1600"
          layout="fill"
          objectFit="cover"
          alt="The unsplash image"
        />
      </div>
    </div>
  );
}

export default ContactPage;
