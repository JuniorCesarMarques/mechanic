import styles from './Headline.module.css';
import img from '../../assets/mechanic/headline-image.png';
import img_logo from '../../assets/mechanic/logo.svg'

const Headline = () => {
  return (
    <div className={styles.container}>
        <div>
          <h1>
          Domine o Reparo de Qualquer Moto em Tempo Recorde com Nosso Manual Completo de Reparo
          </h1>
        </div>
        <p className={styles.subHeadline}>Receba acesso instantâneo a guias detalhados de reparo para todas as marcas, otimizando seu tempo e elevando sua oficina ao próximo nível.</p>
    </div>
  )
}

export default Headline;