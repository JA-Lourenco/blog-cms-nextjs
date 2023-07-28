import { useState } from "react";

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
  page: string;
  totalPages: string;
}

export default function Posts({ content, page, totalPages }: PostsProps) {
  const [posts, setPosts] = useState(content || []);
  const [currentPage, setCurrentPage] = useState(Number(page));

  async function getPosts(page: number) {
    try {
      const client = createClient();

      const data = await client.getByType("post", {
        orderings: {
          field: "document.last_publication_date",
          direction: "desc",
        },
        pageSize: 3,
        page,
      });

      return data;
    } catch (e) {
      console.error("getPosts error: ", e);
      alert("Error to fetch posts!");
    }
  }

  function showPost() {
    return posts.map(({ id, cover, title, date, description }) => (
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

  async function navigate(pageNumber: number) {
    const response = await getPosts(pageNumber);

    let newContent: Post[] = [];

    if (response) {
      newContent = response.results.map(
        ({
          uid,
          last_publication_date,
          data: { cover, title, description },
        }) => {
          return {
            id: uid,
            cover: cover.url || "",
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
    }

    setCurrentPage(pageNumber);
    setPosts(newContent);
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
            {currentPage >= 2 && (
              <div>
                <button onClick={() => navigate(1)}>
                  <FiChevronsLeft size={25} color="var(--white)" />
                </button>

                <button onClick={() => navigate(currentPage - 1)}>
                  <FiChevronLeft size={25} color="var(--white)" />
                </button>
              </div>
            )}

            {currentPage < Number(totalPages) && (
              <div>
                <button onClick={() => navigate(currentPage + 1)}>
                  <FiChevronRight size={25} color="var(--white)" />
                </button>

                <button onClick={() => navigate(Number(totalPages))}>
                  <FiChevronsRight size={25} color="var(--white)" />
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient();

  const data = await client.getByType("post", {
    orderings: {
      field: "document.last_publication_date",
      direction: "desc",
    },
    pageSize: 3,
  });

  const content = data.results.map(
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
      page: data.page,
      totalPages: data.total_pages,
    },
    revalidate: 60 * 30,
  };
};
