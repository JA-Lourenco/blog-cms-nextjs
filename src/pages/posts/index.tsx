import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import {
  FiChevronLeft,
  FiChevronsLeft,
  FiChevronRight,
  FiChevronsRight,
} from "react-icons/fi";

import thumb from "../../../public/images/reactStartPost.png";

import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <Link href="">
            <Image src={thumb} alt="" width={720} height={410} quality={100} />

            <strong>React JS: First Project</strong>
            <time>JULY 19, 2023</time>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              vero, eum aut quas quidem expedita. Deleniti obcaecati odit quas
              id quod quidem quos, quis voluptatem repellat nostrum,
              exercitationem molestias non.
            </p>
          </Link>

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
