import React, { useEffect, useState } from "react";
import questions from "../../data/mechanic_quiz";
import styles from "./Mechanic.module.css";
import { motion } from "framer-motion";
import Headline from "../Headline/Headline";
import Countdown from "../Countdown/Countdown";
import Carousel from "../Carousel/Carousel";
import Feedback from "../Feedback/Feedback";
import Promise from "../Promise/Promise";
import Bonus from "../Bonus/Bonus";
import WhatYouWillReceive from "../WhatYouWillReceive/WhatYouWillReceive";
import Advantages from "../Advantages/Advantages";
import Offer from "../Offer/Offer";
import Faq from "../Faq/Faq";
import Guarantee from "../Guarantee/Guarantee";
import logo from "../../assets/mechanic/logo.svg";

import ReactPixel from 'react-facebook-pixel';

const Mechanic = () => {

  useEffect(() => {
    ReactPixel.init('1228179188187840'); // Substitua pelo seu ID de pixel
    ReactPixel.pageView(); // Registra a visualização da página
  }, []);


  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState([]);
  const [err, setErr] = useState(false);

  // Barra de progresso
  const [barwidth, setBarwidth] = useState(-12);

  const handleSelect = (index) => {
    if ([0, 2].includes(qIndex)) {
      setSelected((prevSelected) =>
        prevSelected.includes(index)
          ? prevSelected.filter((i) => i !== index)
          : [...prevSelected, index]
      );
    } else {
      setSelected([index]);

      const timeoutId = setTimeout(() => {
        setQIndex((prevIndex) => prevIndex + 1);
        setErr(false);
        setSelected([]);

        // Entra aqui na última página da primeira parte
        if (qIndex === 10) {
          setTimeout(() => {
            setQIndex((prevIndex) => prevIndex + 1);
          }, 5000);
        }
      }, 500);
    }
  };

  useEffect(() => {
    setBarwidth(prevBarWidth => prevBarWidth + 100 / 18)
  }, [qIndex])



  console.log(barwidth)

  return (
    <>
      {qIndex < 18 && (
        <div className={styles.main_container}>
          <header className={styles.header}>
            <span className={styles.header_text}>
              Passo {qIndex}/{questions.length + 2}
            </span>
          </header>
          <span
            style={{ width: Math.floor(barwidth) + "vw" }}
            className={styles.line}
          ></span>
          <img src={logo} />
          <div className={styles.container}>
            {(qIndex <= 10 || qIndex >= 13) && (
              <div className="questionContainer">
                <h3>
                  {questions[qIndex <= 10 ? qIndex : qIndex - 2].question}
                </h3>
              </div>
            )}
            <div className={styles.answersContainer}>
              {qIndex < questions.length - 4 &&
                qIndex !== 11 &&
                questions[qIndex].answer.map((item, index) => (
                  <p
                    onClick={() => handleSelect(index)}
                    key={index}
                    style={{
                      background: selected.includes(index) && "#fbbf1b",
                    }}
                  >
                    {item}
                  </p>
                ))}

              {/* Informações de Carregamento */}
              {qIndex === 11 && (
                <div>
                  <h1 className={styles.loading_text}>
                    Carregando suas informações...
                  </h1>
                  <div className={styles.container_loading}>
                    <motion.span
                      className={styles.bar_loading}
                      initial={{ width: "0" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5 }}
                    ></motion.span>
                  </div>
                </div>
              )}

              {/* Gráfico */}
              {qIndex === 12 && (
                <div className={styles.main_chart_container}>
                  <motion.span
                    className={styles.level_text}
                    initial={{ opacity: "0" }}
                    animate={{ opacity: "100%" }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    Seu nível é 37,5%
                  </motion.span>
                  <motion.div
                    className={styles.chart_container}
                    initial={{ height: "0" }}
                    animate={{ height: "500px" }}
                    transition={{ duration: 2 }}
                  >
                    <span
                      style={{ height: "50px", background: "red" }}
                      className={styles.chartbar}
                    >
                      12,5%
                    </span>
                    <span
                      style={{ height: "100px", background: "red" }}
                      className={styles.chartbar}
                    >
                      25%
                    </span>
                    <motion.span
                      style={{ height: "150px" }}
                      className={styles.chartbar_you}
                    >
                      37,5%
                    </motion.span>
                    <span
                      style={{ height: "200px" }}
                      className={styles.chartbar}
                    >
                      50%
                    </span>
                    <span
                      style={{ height: "250px" }}
                      className={styles.chartbar}
                    >
                      62,5%
                    </span>
                    <span
                      style={{ height: "300px", background: "green" }}
                      className={styles.chartbar}
                    >
                      75%
                    </span>
                    <span
                      style={{ height: "350px", background: "green" }}
                      className={styles.chartbar}
                    >
                      87,5%
                    </span>
                    <span
                      style={{ height: "400px", background: "green" }}
                      className={styles.chartbar}
                    >
                      100%
                    </span>
                  </motion.div>
                  <button
                    className={styles.chart_button}
                    onClick={() => {
                      setQIndex((prevQindex) => prevQindex + 1);
                    }}
                  >
                    Avançar
                  </button>
                </div>
              )}

              {qIndex >= 13 &&
                qIndex < 18 &&
                questions[qIndex - 2].answer.map((item, index) => (
                  <p
                    onClick={() => handleSelect(index)}
                    key={index}
                    style={{
                      background: selected.includes(index) && "#fbbf1b",
                    }}
                  >
                    {item}
                  </p>
                ))}

              {/* Botão principal */}
              {[0, 2].includes(qIndex) && (
                <button
                  onClick={() => {
                    if (selected.length > 0) {
                      setQIndex((prevQindex) => prevQindex + 1);
                      setSelected([]);
                      setErr(false);
                    } else {
                      setErr(true);
                    }
                  }}
                >
                  Avançar
                </button>
              )}
              {err && (
                <span style={{ color: "red" }}>Selecione uma opção!</span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Renderização dos componentes adicionais quando o índice é 18 */}
      {qIndex === 18 && (
        <>
          <Headline />
          <Carousel />
          <Promise />
          <WhatYouWillReceive />
          <Advantages />
          <Feedback />
          <Bonus />
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
