import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/images/logo.svg";

import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <a>
          <Image src={logo} alt="logo" />
        </a>

        <nav className="">
          <Link href="/">Home</Link>

          <Link href="/posts">Posts</Link>

          <Link href="/about">About Us</Link>
        </nav>

        <a href="#" type="button" className={styles.startButton}>
          START
        </a>
      </div>
    </header>
  );
}
