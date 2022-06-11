import Head from "next/head";
import matter from "gray-matter";
import { Layout } from "../layout";
import { MarkdownContent } from "../layout/MarkdownContent";

export default function DSA({ data, content }) {
  return (
    <>
      <Head>
        <title>NO-BS-JS | {data.title || "DSA"}</title>
      </Head>

      <Layout>
        <MarkdownContent content={content} />

        {/* <div className="border">show the list here</div> */}
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const fs = require("fs");
  const mdFile = fs.readFileSync(
    `${process.cwd()}/Contents/dsa/readme.md`,
    "utf-8"
  );
  const data = matter(mdFile);

  return {
    props: {
      data: data.data,
      content: data.content,
    },
  };
};
