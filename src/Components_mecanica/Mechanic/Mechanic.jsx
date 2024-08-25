import React, { useState } from "react";
import questions from "../../data/mechanic_quiz";
import styles from "./Mechanic.module.css";
// import Headline from "../Headline/Headline";
// import Countdown from "../Countdown/Countdown";
// import Carousel from "../Carousel/Carousel";
// import Feedback from "../Feedback/Feedback";
// import Promise from "../Promise/Promise";
// import Bonus from "../Bonus/Bonus";
// import WhatYouWillReceive from "../WhatYouWillReceive/WhatYouWillReceive";
// import Advantages from "../Advantages/Advantages";
// import Offer from "../Offer/Offer";
// import Faq from "../Faq/Faq";
// import Guarantee from "../Guarantee/Guarantee";
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
      if(qIndex === 11) {
        setTimeout(() => {
          setQIndex((prevIndex) => prevIndex + 1);
        }, 10000)
      }
  }, 500);
    
  };

  console.log(qIndex)

  return (
    <>
      {qIndex < questions.length && (
        <div className={styles.main_container}>
          <header className={styles.header}>
            <span className={styles.header_text}>
              Passo {qIndex + 1}/{questions.length + 2}
            </span>
          </header>
          <span
              style={{ width: Math.floor(barwidth) + "vw" }}
              className={styles.line}
            ></span>
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
      )}
      {qIndex === questions.length  && (
        <div className={styles.second_container}>
        <header className={styles.header}>
          <span className={styles.header_text}>
            Passo {qIndex + 1}/{questions.length + 2}
          </span>
          <span
            style={{ width: Math.floor(barwidth) + "vw" }}
            className={styles.line}
          ></span>
        </header>
        <h1>Carregando suas informações...</h1>
        <div className={styles.container_loading}>
          <span className={styles.bar_loading}>
          </span>

        </div>
      </div>
      )} {qIndex > questions.length && (
        <div className={styles.main_chart_container}>
          <header className={styles.header}>
          <span className={styles.header_text}>
            Passo {qIndex + 1}/{questions.length + 2}
          </span>
          <span
            style={{ width: Math.floor(barwidth) + "vw" }}
            className={styles.line}
          ></span>
        </header>
          <div className={styles.chart_container}>
            <div className={styles.smash_element}></div>
            <span style={{height: "50px"}} className={styles.chartbar}>12,5%</span>
              <span style={{height: "100px"}} className={styles.chartbar}>25%</span>
              <span style={{height: "150px"}} className={styles.chartbar}>37,5</span>
              <span style={{height: "200px"}} className={styles.chartbar}>50%</span>
              <span style={{height: "250px"}} className={styles.chartbar}>62,5%</span>
              <span style={{height: "300px"}} className={styles.chartbar}>75%</span>
              <span style={{height: "350px"}} className={styles.chartbar}>87,5%</span>
              <span style={{height: "400px"}} className={styles.chartbar}>100%</span>
          </div>
        </div>
      )}

    </>
  );
};

export default Mechanic;

// (
//   <>
//     <Headline />
//     <Carousel />
//     <Promise />
//     <WhatYouWillReceive />
//     <Advantages />
//     <Feedback />
//     <Bonus />
//     <Countdown />
//     <Offer />
//     <Guarantee />
//     <Faq />
//   </>
// )
