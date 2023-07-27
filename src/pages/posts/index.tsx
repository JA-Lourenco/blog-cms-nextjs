import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { createClient } from "@/prismicio";
import { asText } from "@prismicio/client";

import {
  FiChevronLeft,
  FiChevronsLeft,
  FiChevronRight,
  FiChevronsRight,
} from "react-icons/fi";

import styles from "./styles.module.scss";

interface Post {
  id: string;
  cover: string;
  title: string;
  description: string;
  date: string;
}

interface PostsProps {
  content: Post[];
}

export default function Posts({ content }: PostsProps) {
  function showPost() {
    return content.map(({ id, cover, title, date, description }) => (
      <Link href={`/posts/${id}`} key={id}>
        <Image
          src={cover}
          alt={title}
          width={720}
          height={410}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMMqgcAASkA0zyeH6YAAAAASUVORK5CYII="
        />

        <strong>{title}</strong>
        <time>{date}</time>
        <p>{description}...</p>
      </Link>
    ));
  }

  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {showPost()}

          <div className={styles.navigation}>
            <div>
              <button>
                <FiChevronsLeft size={25} color="var(--white)" />
              </button>

              <button>
                <FiChevronLeft size={25} color="var(--white)" />
              </button>
            </div>

            <div>
              <button>
                <FiChevronsRight size={25} color="var(--white)" />
              </button>

              <button>
                <FiChevronRight size={25} color="var(--white)" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient();

  const data = await client.getAllByType("post", {
    orderings: {
      field: "document.last_publication_date",
      direction: "desc",
    },
  });

  const content = data.map(
    ({ uid, last_publication_date, data: { cover, title, description } }) => {
      return {
        id: uid,
        cover: cover.url,
        title: asText(title),
        description: asText(description).substring(0, 150),
        date: new Date(last_publication_date).toLocaleDateString("en-US", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }),
      };
    }
  );

  return {
    props: {
      content,
    },
    revalidate: 60 * 30,
  };
};
