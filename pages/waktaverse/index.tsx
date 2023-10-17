import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

function WaktaversePage() {
  return (
    <div className="rootdiv">
      <Head>
        <title>Waktaverse</title>
      </Head>

      <div>
        <ul className="non-style-list">
          <li>
            <Link href="http://localhost:3000">←</Link>
          </li>
          <li>WakTaVerse</li>
        </ul>
      </div>

      <div style={{ width: 800, height: 600, position: "relative" }}>
        <a href="https://cafe.naver.com/steamindiegame">
          <Image
            src="https://cafeptthumb-phinf.pstatic.net/MjAyMTEyMDNfNCAg/MDAxNjM4NTI4NTk0MTY1.Uyn_V2bNbjqmYsNYCFakvlAjH3qX0RZh32hLkNY1Tj0g.GCS_txWjJJLE559PlvAAC8Vk5aerH5AgSSo-QTJGJlUg.PNG/67.1.png?type=w1600"
            layout="fill"
            objectFit="cover"
            alt="The unsplash image"
          />
        </a>
      </div>
    </div>
  );
}

export default WaktaversePage;
