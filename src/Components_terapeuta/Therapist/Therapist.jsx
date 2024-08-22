import HeadlineSection from '../HeadlineSection/HeadlineSection';
import WhatYouWillReceive from '../WhatYouWillReceive/WhatYouWillReceive';
import Promise from '../Promise/Promise';
import Carousel from '../Carousel/Carousel';
import Countdown from '../Countdown/Countdown';
import Offer from '../Offer/Offer';
import Guarantee from '../Guarantee/Guarantee';
import Faq from '../Faq/Faq';
import questions from "../../data/therapist_quiz";
import { useState } from 'react';
import styles from './Therapist.module.css';

const Therapist = () => {
    const [qIndex, setQIndex] = useState(0);
    const [selected, setSelected] = useState(null);
    const [error, setError] = useState(false);
  
    const handleSelect = (index) => {
      setSelected(index)
    };
  
  
    const handleQuestions = () => {
      if(selected !== null) {
        setSelected(null) //Limpa a resposta selecionada
        setQIndex((prevIndex) => prevIndex + 1);
        setError(false);
      } else {
        setError(true);
      }
  
    };

    return (
      <>
        {qIndex < questions.length ? <div className={styles.main_container}>
          <div className={styles.container}>
            <div className="questionContainer">
              <h3>{questions[qIndex].question}</h3>
            </div>
            <div className={styles.answersContainer}>
              {questions[qIndex].answer.map((item, index) => (
                <p
                  onClick={() => handleSelect(index)}
                  key={index}
                  style={{ background: index === selected && "#452543"}}
                >
                  {item}
                </p>
              ))}
            </div>
            <button onClick={() => handleQuestions()}>Proxima pergunta</button>
            {error && <span className={styles.error}>Escolha uma opção!</span>}
          </div>
        </div> : 
        <>
    <HeadlineSection />
    <WhatYouWillReceive />
    <Promise />
    <Carousel />
    <Countdown />
    <Offer />
    <Guarantee />
    <Faq />
        </>}
      </>
    );
  };
  
  export default Therapist;
  