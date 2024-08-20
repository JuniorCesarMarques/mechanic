import React, { useState } from "react";
import questions from "../../data/questionsData";
import styles from "./Quiz.module.css";
import Headline from '../Headline/Headline';
import Countdown from '../Countdown/Countdown';
import Button from '../Button/Button';
import Carousel from '../Carousel/Carousel';
import Feedback from '../Feedback/Feedback';
import Promise from '../Promise/Promise';
import WhatYouWillReceive from '../WhatYouWillReceive/WhatYouWillReceive';
import Advantages from '../Advantages/Advantages';
import Offer from '../Offer/Offer';
import Faq from '../Faq/Faq';
import Guarantee from '../Guarantee/Guarantee';

const Quiz = () => {
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(false);

  const handleSelect = (index) => {
    setSelected(selected === index ? null : index);
  };

  const handleQuestions = () => {
    setQIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <>
      {qIndex < 18 && <div className={styles.main_container}>
        <div className={styles.container}>
          <div className="questionContainer">
            <h3>{questions[qIndex].question}</h3>
          </div>
          <div className={styles.answersContainer}>
            {questions[qIndex].answer.map((item, index) => (
              <p
                onClick={() => handleSelect(index)}
                key={index}
                style={{ background: selected === index && "#dd293b" }}
              >
                {item}
              </p>
            ))}
          </div>
          <button onClick={() => handleQuestions()}>Proxima pergunta</button>
        </div>
      </div>}


    {qIndex > 17 && <div>
        <Countdown />
        <Headline />
        <Button margin="0 auto 30px">
          sim, eu quero meus manuais agora!
        </Button>
        <Carousel />
        <Feedback />
        <Promise />
        <WhatYouWillReceive />
        <Advantages />
        <Offer />
        <Guarantee />
        <Faq />
    </div>}
    </>
  );
};

export default Quiz;
