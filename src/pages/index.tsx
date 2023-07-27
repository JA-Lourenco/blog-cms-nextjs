import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";

import { createClient } from "@/prismicio";
import { asText, asLink } from "@prismicio/client";

import techs from "../../public/images/techs.svg";

import styles from "../styles/home.module.scss";

interface ContentProps {
  title: string;
  subTitle: string;
  linkAction: string;
  mobileTitle: string;
  mobileContent: string;
  mobileImage: string;
  webImage: string;
  webTitle: string;
  webContent: string;
}

interface HomeProps {
  content: ContentProps;
}

export default function Home({ content }: HomeProps) {
  const {
    title,
    subTitle,
    linkAction,
    mobileTitle,
    mobileContent,
    mobileImage,
    webImage,
    webTitle,
    webContent,
  } = content;

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>{title}</h1>

            <span>{subTitle}</span>

            <a href={linkAction} target="_blank">
              <button>START NOW</button>
            </a>
          </section>

          <img src="/images/banner-contents.png" alt="Contents" />
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <section>
            <h2>{mobileTitle}</h2>

            <span>{mobileContent}</span>
          </section>

          <img src={mobileImage} alt="App Dev" />
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <img src={webImage} alt="Web Dev" />

          <section>
            <h2>{webTitle}</h2>

            <span>{webContent}</span>
          </section>
        </div>

        <div className={styles.nextLevelContent}>
          <Image src={techs} alt="Techs" />

          <h2>
            More than <span className={styles.students}>15 thousand</span>{" "}
            people already taken their careers to the next level
          </h2>

          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>

          <a href={linkAction} target="_blank">
            <button>ACCESS CLASS!</button>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient();

  const { data } = await client.getByUID("home", "take-the-next-step");

  const content = {
    title: asText(data.title),
    subTitle: asText(data.subtitle),
    linkAction: asLink(data.linkaction),
    mobileTitle: asText(data.mobiletitle),
    mobileContent: asText(data.mobilecontent),
    mobileImage: data.mobileimage.url,
    webImage: data.webimage.url,
    webTitle: asText(data.webtitle),
    webContent: asText(data.webcontent),
  };

  return {
    props: { content },
    revalidate: 60 * 2,
  };
};
