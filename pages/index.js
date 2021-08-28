import Head from "next/head";
import AppBody from "../components/AppBody";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Head>
        <title>Google </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <AppBody />
      <Footer />
    </div>
  );
}
