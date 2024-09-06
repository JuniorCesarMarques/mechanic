import styles from './WhatYouWillReceive.module.css';
import img_1 from '../../assets/TherapistBlue/feedback/feedback_1.png'
import img_2 from '../../assets/TherapistBlue/feedback/feedback_2.png'
import img_3 from '../../assets/TherapistBlue/feedback/feedback_3.png'
import img_pc from '../../assets/TherapistBlue/whatYouWillReceive/img.png'
import img_mobile from '../../assets/TherapistBlue/whatYouWillReceive/img_mobile.png'

const WhatYouWillReceive = () => {
    
  return (
    <div className={styles.container}>
          <img className={styles.img_pc} src={img_pc} />
          <img className={styles.img_mobile} src={img_mobile} />
        <div className={styles.container_content}>
            <h1>Veja o que estão <br /> falando da pack</h1>
          <div className={styles.img_container}>
            <img src={img_1} />
            <img src={img_2} />
            <img src={img_3} />
          </div>
        </div>
    </div>
  )
}

export default WhatYouWillReceive;