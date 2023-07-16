import Head from "next/head";

import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>Take the next step!</h1>

            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              explicabo, veniam recusandae assumenda cumque reiciendis tempora?
              At velit tempora accusantium laudantium! Doloremque ullam
              perspiciatis atque blanditiis tempore aliquam eum quasi?
            </span>

            <a>
              <button>START NOW</button>
            </a>
          </section>

          <img src="/images/banner-contents.png" alt="Contents" />
        </div>
      </main>
    </>
  );
}
