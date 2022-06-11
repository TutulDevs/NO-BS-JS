import Head from "next/head";
import { CardList } from "../components/CardList";
import { Hero } from "../components/Hero";
import { Layout } from "../layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>NO-BS-JS | Home</title>
      </Head>

      <Layout>
        <Hero />

        <CardList />
      </Layout>
    </>
  );
}
