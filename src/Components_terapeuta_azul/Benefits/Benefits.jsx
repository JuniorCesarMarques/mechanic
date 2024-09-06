import styles from './Benefits.module.css';
import img from '../../assets/TherapistBlue/Benefits/img.png';
import img_2 from '../../assets/TherapistBlue/Benefits/img_2.png';
import img_3 from '../../assets/TherapistBlue/Benefits/img_3.png';
import img_4 from '../../assets/TherapistBlue/Benefits/img_4.png';

const Benefits = () => {
  return (
    <div className={styles.container}>
      <h1>O que vai receber <br /> ao comprar a pack:</h1>
      <h2>Algumas das artes inclusas:</h2>
        <div className={styles.img_container}>
          <img src={img_2} />
          <h2>são +50 destaques impactantes!</h2>
          <img src={img} />
          <h2>Modelos de carrosseis infinitos:</h2>
          <img src={img_3} />
          <img src={img_4} />
          <h1>E muito mais...</h1>
        </div>
    </div>
  )
}

export default Benefits;