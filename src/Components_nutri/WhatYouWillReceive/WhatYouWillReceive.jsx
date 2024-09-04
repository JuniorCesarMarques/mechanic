import styles from './WhatYouWillReceive.module.css';
import img_1 from '../../assets/Therapist/feedback/feedback_1.png'
import img_2 from '../../assets/Therapist/feedback/feedback_2.png'
import img_3 from '../../assets/Therapist/feedback/feedback_3.png'
import imgs from '../../assets/Nutri/background.svg'

const WhatYouWillReceive = () => {
    
  return (
    <div className={styles.container}>
          <img className={styles.imgs} src={imgs} />
        <div className={styles.container_content}>
            <h1>Veja o que estão falando da pack</h1>
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