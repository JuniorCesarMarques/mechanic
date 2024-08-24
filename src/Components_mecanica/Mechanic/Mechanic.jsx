import React, { useState } from "react";
import questions from "../../data/mechanic_quiz";
import styles from "./Mechanic.module.css";
import Headline from "../Headline/Headline";
import Countdown from "../Countdown/Countdown";
import Carousel from "../Carousel/Carousel";
import Feedback from "../Feedback/Feedback";
import Promise from "../Promise/Promise";
import WhatYouWillReceive from "../WhatYouWillReceive/WhatYouWillReceive";
import Advantages from "../Advantages/Advantages";
import Offer from "../Offer/Offer";
import Faq from "../Faq/Faq";
import Guarantee from "../Guarantee/Guarantee";
import logo from "../../assets/mechanic/logo.svg";

const Mechanic = () => {
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  //Loading bar
  const [barwidth, setBarwidth] = useState(0);

  const handleSelect = (index) => {
    setBarwidth((prevBarWidth) => prevBarWidth + 100 / questions.length);
    setSelected(index);

    const timeoutId = setTimeout(() => {
      setQIndex((prevIndex) => prevIndex + 1);
      setSelected(null);
    }, 500);
  };

  return (
    <>
      {qIndex < questions.length ? (
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
          <img src={logo} />
          <div className={styles.container}>
            <div className="questionContainer">
              <h3>{questions[qIndex].question}</h3>
            </div>
            <div className={styles.answersContainer}>
              {questions[qIndex].answer.map((item, index) => (
                <p
                  onClick={() => handleSelect(index)}
                  key={index}
                  style={{ background: index === selected && "#fbbf1b" }}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <Headline />
          <Carousel />
          <Feedback />
          <Promise />
          <WhatYouWillReceive />
          <Advantages />
          <Countdown />
          <Offer />
          <Guarantee />
          <Faq />
        </>
      )}
    </>
  );
};

export default Mechanic;
