import styles from "./Offer.module.css";
import Button from "../Button/Button";
import img from "../../assets/headline-image.svg";
import img2 from "../../assets/payment.png";

const Offer = () => {


  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <img src={img} />
      </div>
      <div className={styles.offer_container}>
        <p className={styles.offer_title}>
            Oferta Especial <br /> <span className={styles.secondary_color}>por tempo limitado</span>
        </p>
        <p>
            de <span className={styles.line_through}>R$ 159,90</span> por apenas
        </p>
        <p className={styles.offer_price}>
            8x de <span className={styles.secondary_background_color}>R$ 5,40*</span>
        </p>
        <p>
            ou a vista por R$ 37,90
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