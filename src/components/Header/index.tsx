import Image from "next/image";

import { ActiveLink } from "../ActiveLink";

import logo from "../../../public/images/logo.svg";

import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <a href="/">
          <Image src={logo} alt="logo" />
        </a>

        <nav>
          <ActiveLink title="Home" href="/" activeClassName={styles.active} />

          <ActiveLink
            title="Posts"
            href="/posts"
            activeClassName={styles.active}
          />

          <ActiveLink
            title="About Us"
            href="/about"
            activeClassName={styles.active}
          />
        </nav>

        <a href="#" type="button" className={styles.startButton}>
          START
        </a>
      </div>
    </header>
  );
}
