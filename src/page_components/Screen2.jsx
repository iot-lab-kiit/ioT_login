import React, { useRef } from "react";
import styles from "../styles/Login.module.css";
import Image from "next/image";
import Script from "next/script";

function Screen2(props) {
  return (
    <div className={styles.body1}>
      <Script src="/src/page_components/sc2.js"></Script>
      <div className={styles.all2}>
        <div className={styles.name}>
          <div className={styles.title2}>
            ioT Lab
            <div className={styles.tagline}>
              <span className={styles.color}>
                A CENTER OF EXCELLENCE AND DEVELOPMENT OF CREATIVE IDEAS
              </span>
              <span className={styles.green}>KIIT</span>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.item1}>
              <div className={styles.img1}>
                <img
                  src="/images/1.png"
                  height="60px"
                  width="60px"
                  className={styles.i1}
                />
                <div className={styles.work}></div>
              </div>
            </div>
            <div className={styles.item2}>
              <div className={styles.img2}>
                <Image
                  src="/images/2.png"
                  height={60}
                  width={60}
                  className={styles.i1}
                />
                <div className={styles.work}></div>
              </div>
            </div>
            <div className={styles.item3}>
              <div className={styles.img3}>
                <Image
                  src="/images/3.png"
                  height={60}
                  width={60}
                  className={styles.i1}
                />
                <div className={styles.work}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Screen2;
