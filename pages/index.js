import Head from "next/head";
import { Hero } from "../components/Hero";
import { Layout } from "../layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Layout>
        <Hero />
      </Layout>
    </>
  );
}
