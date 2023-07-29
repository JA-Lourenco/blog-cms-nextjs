import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";

import { createClient } from "@/prismicio";
import { asHTML, asText } from "@prismicio/client";

import { blurDataURL } from "@/utils";

import styles from "./post.module.scss";

interface PostProps {
  post: {
    id: string;
    cover: string;
    title: string;
    description: string;
    date: string;
  };
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <Image
            src={post.cover}
            alt={post.title}
            width={720}
            height={410}
            placeholder="blur"
            blurDataURL={blurDataURL}
            quality={100}
          />

          <h1>{post.title}</h1>

          <time>{post.date}</time>

          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: post.description }}
          />
        </article>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const client = createClient();
  const id = String(params?.id);
  let response;

  /* Try/catch block to make redirect works.
  As suggested in the prismic forum: https://community.prismic.io/t/prismicerror-no-documents-were-returned/9591 */
  try {
    response = await client.getByUID("post", id);
  } catch (e) {
    console.error("getServerSideProps Error: ", e);
    return {
      redirect: {
        destination: "/posts",
        permanent: false,
      },
    };
  }

  const post = {
    id,
    cover: response.data.cover.url,
    title: asText(response.data.title),
    description: asHTML(response.data.description),
    date: new Date(response.last_publication_date).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  };

  return {
    props: {
      post,
    },
  };
};
