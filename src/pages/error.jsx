import React from "react";
import Homebutton from "@/components/Homebutton";
import styles from "../styles/Error.module.css";

function error() {
  return (
    <div className={styles.all3}>
      <div className={styles.error}>404</div>
      <div className={styles.message}>
        well that wasn't supposed to happen :[
      </div>
      <Homebutton />
    </div>
  );
}

export default error;
