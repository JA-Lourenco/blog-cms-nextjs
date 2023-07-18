import Head from "next/head";
import Image from "next/image";

import techs from "../../public/images/techs.svg";

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

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <section>
            <h2>Learn now! How to create apps for Android and iOS</h2>

            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              dolor maiores vitae. Veniam, est deserunt! Delectus rem beatae
              doloribus explicabo ipsa sint, eveniet illo, cumque earum
              repellendus nam? Autem, repellendus!
            </span>
          </section>

          <img src="/images/demoApp.png" alt="App Dev" />
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <img src="/images/webDev.png" alt="Web Dev" />

          <section>
            <h2>You can also create systems for web. Your own social media</h2>

            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              odio magni laborum, iusto officia totam perferendis vitae
              recusandae consequatur nemo? Corrupti accusantium officia vel nam
              blanditiis voluptate beatae placeat itaque.
            </span>
          </section>
        </div>

        <div className={styles.nextLevelContent}>
          <Image src={techs} alt="Techs" />

          <h2>
            More than <span className={styles.students}>15 thousand</span>{" "}
            people already taken their careers to the next level
          </h2>

          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>

          <a href="">
            <button>ACCESS CLASS!</button>
          </a>
        </div>
      </main>
    </>
  );
}
