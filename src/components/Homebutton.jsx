import React from "react";
import styles from "../styles/Error.module.css";
import Link from "next/link";
function Homebutton() {
  return (
    <div>
      <Link href="/">
        <button className={styles.button}>go back home</button>
      </Link>
    </div>
  );
}

export default Homebutton;
