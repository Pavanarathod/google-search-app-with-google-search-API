import Head from "next/head";
import AppBody from "../components/AppBody";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <AppBody />
    </div>
  );
}
