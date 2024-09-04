import HeadlineSection from "../HeadlineSection/HeadlineSection";
import WhatYouWillReceive from "../WhatYouWillReceive/WhatYouWillReceive";
import Promise from "../Promise/Promise";
import Carousel from "../Carousel/Carousel";
import Countdown from "../Countdown/Countdown";
import Offer from "../Offer/Offer";
import Guarantee from "../Guarantee/Guarantee";
import Faq from "../Faq/Faq";
import questions from "../../data/therapist_quiz";
import { useState, useEffect } from "react";
import styles from "./Hot.module.css";
import logo from "../../assets/Therapist/logo.svg";

import ReactPixel from 'react-facebook-pixel';
import tracking from '../../tracking/trackingScript';


const Hot = () => {

  tracking();

  useEffect(() => {
    console.log("teste")
    ReactPixel.init('538931935139904'); // Substitua pelo seu ID de pixel
    ReactPixel.pageView(); // Registra a visualização da página

    document.title = "Packhot"
  }, []);

  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  //Loading bar
  const [barwidth, setBarwidth] = useState(0);

  const handleSelect = (index) => {
    setSelected(index);

    const timeoutId = setTimeout(() => {
      setBarwidth((prevBarWidth) => prevBarWidth + 100 / questions.length);
      setQIndex((prevIndex) => prevIndex + 1);
      setSelected(null);
    }, 500);
  };

  return (
    <>
      {false ? (
        <div className={styles.main_container}>
          <header className={styles.header}>
            <span className={styles.header_text}>
              Passo {qIndex + 1}/{questions.length}
            </span>
            <span
              style={{ width: Math.floor(barwidth) + "vw" }}
              className={styles.line}
            ></span>
          </header>
          <img className={styles.logo} src={logo} alt="" />
          <div className={styles.container}>
            <div>
              <h3>{questions[qIndex].question}</h3>
            </div>
            <div className={styles.answersContainer}>
              {questions[qIndex].answer.map((item, index) => (
                <p
                  onClick={() => handleSelect(index)}
                  key={index}
                  style={{ background: index === selected && "#452543" }}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <HeadlineSection />
          <WhatYouWillReceive />
          <Promise />
          <Carousel />
          <Countdown />
          <Offer />
          <Guarantee />
          <Faq />
        </>
      )}
    </>
  );
};

export default Hot;
