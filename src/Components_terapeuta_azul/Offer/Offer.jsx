import styles from "./Offer.module.css";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import img from "../../assets/TherapistBlue/headlineSection.png";
import img2 from "../../assets/mechanic/payment.png";
import { IoCheckbox } from "react-icons/io5";
import { BsFillGiftFill } from "react-icons/bs";

const Offer = () => {
  const [hours, setHours] = useState(2);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          setMinutes((prevMinutes) => {
            if (prevMinutes > 0) {
              return prevMinutes - 1;
            } else {
              setHours((prevHours) => (prevHours > 0 ? prevHours - 1 : 0));
              return 59; // Reinicia minutos
            }
          });
          return 59; // Reinicia segundos
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatNumber = (number) => number.toString().padStart(2, "0");

  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <img src={img} />
      </div>
      <div className={styles.offer_container}>
        <p className={styles.offer_title}>
            Oferta Especial <br /> <span className={styles.secondary_color}>por tempo limitado</span>
        </p>
        <ul className={styles.check_section}>
          <li><IoCheckbox /> 50 Artes para o Feed</li>
          <li><IoCheckbox /> 40 Artes para Stories</li>
          <li><IoCheckbox /> 70 Capas de Destaque</li>
          <li><IoCheckbox /> 5 Carrosseis infinitos</li>
          <li><IoCheckbox /> Mini Curso Canva</li>
          <li><IoCheckbox /> Acesso vitalício</li>
          <li><IoCheckbox /> Atualizações constantes</li>
          <li className={styles.gift}><BsFillGiftFill /> Bônus Paleta de cores</li>
          <li className={styles.gift}><BsFillGiftFill /> Bônus Legendas prontas</li>
          <li className={styles.gift}><BsFillGiftFill /> Bônus Calendário de conteúdo</li>
        </ul>
        <p>
            de <span className={styles.line_through}>R$ 159,90</span> por apenas
        </p>
        <p className={styles.offer_price}>
            6x de <span className={styles.secondary_background_color}>R$ 10,52*</span>
        </p>
        <p>
            ou a vista por R$ 57,00
        </p>
        <Button>
        sim, eu quero garantir meu pack agora mesmo!
        </Button>
        <img className={styles.payment_img} src={img2} />
      </div>
    </div>
  );
};

export default Offer;
