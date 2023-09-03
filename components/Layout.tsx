import { FC } from "react";
import Link from "next/link";
import styles from "./Layout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faEnvelope,
  faHomeUser,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import cn from "classnames";
import { useRouter } from "next/router";
import Image from "next/image";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout: FC<Props> = ({ children }) => {
  const router = useRouter();

  const isActive = (path: string): boolean => router.pathname === path;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.headshotLogo}>
          <Image
            src="/headshot-sm.png"
            alt="Ryan Smith"
            width={200}
            height={200}
          />
        </span>
        <h1>Ryan Smith, Full-Stack Software Developer</h1>
      </header>
      <div className={styles.appBody}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link
                href="/"
                passHref
                className={cn(styles.navLink, {
                  [styles.active]: isActive("/"),
                })}
              >
                <FontAwesomeIcon
                  className={styles.buttonIcon}
                  icon={faHomeUser}
                />
                <span>Hello World</span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                href="/projects"
                passHref
                className={cn(styles.navLink, {
                  [styles.active]: isActive("/projects"),
                })}
              >
                <FontAwesomeIcon
                  className={styles.buttonIcon}
                  icon={faScrewdriverWrench}
                />
                <span>Projects</span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                href="/code-samples"
                passHref
                className={cn(styles.navLink, {
                  [styles.active]: isActive("/code-samples"),
                })}
              >
                <FontAwesomeIcon className={styles.buttonIcon} icon={faCode} />
                <span>Code Samples</span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                href="/contact"
                passHref
                className={cn(styles.navLink, {
                  [styles.active]: isActive("/contact"),
                })}
              >
                <FontAwesomeIcon
                  className={styles.buttonIcon}
                  icon={faEnvelope}
                />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
