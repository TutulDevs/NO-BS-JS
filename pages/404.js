import Head from "next/head";
import { Layout } from "../layout";

const ErrorPage = () => {
  return (
    <Layout>
      <Head>
        <title>NO-BS-JS | 404</title>
      </Head>

      <div className="h-80 flex items-center justify-center text-9xl font-extrabold tracking-wider">
        4<span className="animate-bounce text-main">0</span>4
      </div>
    </Layout>
  );
};

export default ErrorPage;
