import styles from './Headline.module.css';
import img from '../../assets/headline-image.png';

const Headline = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.container}>
        encontre defeitos complexo e difíceis de maneira <span className={styles.highlight}>rápido e fácil</span> em motos com o passa a passo mais completo dos fabricantes com   O MEU MANUAL DO REPARO   com manuais de todas as marcas 
        </h1>
        <p>MAIOR FORNECEDOR DE MANUAIS DO BRASIL!</p>
        <img src={img} alt="" />
        <p>PARTIDA+ MOTOR+ IGUINIÇÃO+ MODULOS..</p>
    </div>
  )
}

export default Headline;