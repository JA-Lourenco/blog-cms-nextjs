import { GetStaticProps } from "next";
import Head from "next/head";

import { createClient } from "@/prismicio";
import { asLink, asText } from "@prismicio/client";

import {
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa6";

import styles from "./styles.module.scss";

interface AboutProps {
  content: {
    title: string;
    description: string;
    banner: string;
    youtube: string;
    instagram: string;
    facebook: string;
    linkedin: string;
  };
}

export default function About({
  content: {
    title,
    description,
    banner,
    youtube,
    instagram,
    facebook,
    linkedin,
  },
}: AboutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>{title}</h1>
            <p>{description}</p>

            <a href={youtube} target="_blank">
              <FaYoutube size={40} />
            </a>

            <a href={instagram} target="_blank">
              <FaInstagram size={40} />
            </a>

            <a href={facebook} target="_blank">
              <FaFacebook size={40} />
            </a>

            <a href={linkedin} target="_blank">
              <FaLinkedin size={40} />
            </a>
          </section>

          <img src={banner} alt={title} />
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient();

  const { results } = await client.getByType("about");

  const { title, description, banner, youtube, instagram, facebook, linkedin } =
    results[0].data;

  const content = {
    title: asText(title),
    description: asText(description),
    banner: banner.url,
    youtube: asLink(youtube),
    instagram: asLink(instagram),
    facebook: asLink(facebook),
    linkedin: asLink(linkedin),
  };

  return {
    props: {
      content,
    },
    revalidate: 60 * 30,
  };
};
