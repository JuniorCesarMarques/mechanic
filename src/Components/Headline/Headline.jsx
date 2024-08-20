import styles from './Headline.module.css';
import img from '../../assets/headline-image.png';

const Headline = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.container}>
        encontre defeitos complexos e difíceis de maneira <span className={styles.highlight}>rápida e fácil</span> em motos com o passo a passo mais completo dos fabricantes com   o manual completo de reparo para todas as marcas
        </h1>
        <p>MAIOR FORNECEDOR DE MANUAIS DO BRASIL!</p>
        <img src={img} alt="" />
        <p className={styles.last_p}>PARTIDA+ MOTOR+ IGUINIÇÃO+ MODULOS..</p>
    </div>
  )
}

export default Headline;