import React, { useState, useEffect } from "react";
import styles from "./HeadlineSection.module.css";
import img from '../../assets/nutri/headlineSection/headline_img.svg';

const HeadlineSection = () => {

  return (
    <div className={styles.container}>
      <h2>Promoção por tempo limitado</h2>
      <div>
        <h1>
          Canva para Nutricionistas
        </h1>
        <p>
        Domine as redes sociais e encante seus clientes com o Pack de artes no Canva para Nutricionistas!
        </p>
      </div>
      <img src={img} />
    </div>
  );
};

export default HeadlineSection;
