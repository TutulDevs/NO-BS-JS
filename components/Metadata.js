import Head from "next/head";

export const Metadata = ({ title, description }) => (
  <Head>
    <title>{title ? ` ${title}` : "NO-BS-JS"}</title>
    <meta
      name="description"
      content={description || "A Deep Dive Into JavaScript World"}
    />
  </Head>
);
