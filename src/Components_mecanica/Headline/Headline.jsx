import styles from './Headline.module.css';
import img from '../../assets/mechanic/headline-image.png';
import Button from '../Button/Button';
import img_logo from '../../assets/mechanic/logo.svg'

const Headline = () => {
  return (
    <div className={styles.container}>
        <h3>Oferta por tempo limitado</h3>
        <img className={styles.logo} src={img_logo} />
        <div>
          <h1>
          Encontre e Resolva Defeitos Complexos e Difíceis em Motos de <span className={styles.highlight}>Forma Rápida e Fácil</span> com o Passo a Passo Completo
          </h1>
        </div>
        <p className={styles.subHeadline}>Manual de reparo para motos que inclui manuais de todas as marcas</p>
        <p className={styles.highlight}>MAIOR FORNECEDOR DE MANUAIS DO BRASIL!</p>
        <img src={img} />
        <p className={styles.last_title}>PARTIDA+ MOTOR+ IGUINIÇÃO+ MODULOS..</p>
        <Button>
        sim, eu quero meus manuais agora!
      </Button>
    </div>
  )
}

export default Headline;