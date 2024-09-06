import React, { useState, useEffect } from 'react';
import styles from "./HowToReceive.module.css";
import Button from "../Button/Button";
import img_1 from "../../assets/Therapist/Carousel/img_1.png";
import img_2 from "../../assets/Therapist/Carousel/img_2.png";
import img_3 from "../../assets/Therapist/Carousel/img_3.png";

const imgs = [img_1, img_2, img_3];
const AUTOPLAY_INTERVAL = 2500; // Intervalo de autoplay em milissegundos

const HowToReceive = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imgs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imgs.length) % imgs.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, AUTOPLAY_INTERVAL);

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <div className={styles.container}>
      <h1>
        Como Usar a Pack:
      </h1>
      <div className={styles.carousel}>
        <button className={styles.prevButton} onClick={prevSlide}>❮</button>
        <div className={styles.img_container}>
          <img className={styles.img_slide} 
          src={imgs[currentIndex]} 
          alt={`Slide ${currentIndex + 1}`}
           />
        </div>
        <button className={styles.nextButton} onClick={nextSlide}>❯</button>
      </div>
      <Button>Sim, eu quero garantir meu pack agora mesmo!</Button>
    </div>
  );
};

export default HowToReceive;
