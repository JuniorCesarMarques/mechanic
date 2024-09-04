import styles from './WhatYouWillReceive.module.css';
// import img_1 from '../../assets/Therapist/feedback/feedback_1.jpeg'
// import img_2 from '../../assets/Therapist/feedback/feedback_2.jpeg'
// import img_3 from '../../assets/Therapist/feedback/feedback_3.jpeg'
import imgs from '../../assets/Hot/whatYouWillReceive/img.svg'

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