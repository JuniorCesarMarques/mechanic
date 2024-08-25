import styles from './Faq.module.css';
import faqData from './faqData.js';
import check_circle from '../../assets/mechanic/promise/check_circle.svg'

const Faq = () => {


  return (
    <div className={styles.container}>
        <h1>Perguntas frequentes</h1>
        {faqData.map((item, index) => (
            <div key={index} 
            className={styles.faq_option}>
                <div className={styles.title_container}>
                    <h2><img className={styles.img} src={check_circle} />{item.title}</h2>
                    <div 
                    className={styles.arrow_container}
                    >
      
                    </div>
                </div>
                <p
                className={styles.container_text}
                >
                {item.text}
                </p>
            </div>
        ))}
    </div>
  )
}

export default Faq;
