import Head from "next/head";
import matter from "gray-matter";
import { Layout } from "../layout";
import { MarkdownContent } from "../layout/MarkdownContent";

export default function Concepts({ data, content }) {
  return (
    <>
      <Head>
        <title>NO-BS-JS | {data.title || "JS Concepts"}</title>
      </Head>

      <Layout>
        <MarkdownContent content={content} />
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const fs = require("fs");
  const mdFile = fs.readFileSync(
    `${process.cwd()}/Contents/concepts/readme.md`,
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
