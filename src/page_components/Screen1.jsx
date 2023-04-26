import React from "react";
import styles from "../styles/Login.module.css";
import Title from "@/components/Title";

function Screen1(props) {
  return (
    <div className={styles.body}>
      <div className={styles.all}>
        <div
          onMouseEnter={() => {
            setTimeout(() => {
              props.updateMain("2");
            }, 1000);
          }}
        >
          <Title />
        </div>
      </div>
    </div>
  );
}

export default Screen1;
