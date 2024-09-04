import React from "react";
import styles from "./HeadlineSection.module.css";
import img from '../../assets/Farmacia/headlineSection.png';

const HeadlineSection = () => {

  return (
    <div className={styles.container}>
      <h2>Promoção por tempo limitado</h2>
      <div>
        <h1>
          Pack Canva Para Farmácia
        </h1>
        <p>
        Somente com nossos templates, suas postagens de Corretores se <span className={styles.highlight}>tornarão irresistíveis</span> e gerarão <span className={styles.highlight}
        >engajamento instantâneo!</span>
        </p>
      </div>
      <img src={img} />
    </div>
  );
};

export default HeadlineSection;
