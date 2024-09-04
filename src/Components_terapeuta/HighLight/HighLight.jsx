import styles from "./HighLight.module.css";
import img from "../../assets/Therapist/HighLight/img.png";

const HighLight = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={img} />
      </div>
    </div>
  );
};

export default HighLight;
