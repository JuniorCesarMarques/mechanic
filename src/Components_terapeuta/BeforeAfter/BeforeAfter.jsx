import React from "react";
import styles from "./BeforeAfter.module.css"; 
import img_1 from "../../assets/Therapist/BeforeAfter/beforeAfter_1.png";
import img_2 from "../../assets/Therapist/BeforeAfter/beforeAfter_2.png";


const BeforeAfter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <div>
          <img src={img_2} />
          <p className={styles.without_pack}>Sem a Pack</p>
        </div>
        <div>
          <img src={img_1} />
          <p>Com a Pack</p>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;
