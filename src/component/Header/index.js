import React from "react";
import Menu from "../Menu";
import Link from "next/link";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className="container mx-auto">
          <Link href="/">
            <a>
              <img
                className="mx-auto"
                src="/logo_palpitebox.png"
                alt="PalpiteBox"
              />
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.wrapper__menu}>
        <Menu />
      </div>
    </>
  );
};

export default Header;
