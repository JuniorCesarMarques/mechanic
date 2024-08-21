import styles from './Headline.module.css';
import img from '../../assets/headline-image.svg';
import Button from '../Button/Button';

const Headline = () => {
  return (
    <div className={styles.container}>
        <h3>Oferta por tempo limitado</h3>
        <div>
          <h1>
          encontre defeitos complexos e difíceis de maneira rápida e fácil em motos com o passo a passo mais completo dos fabricantes com   o manual completo de reparo para todas as marcas
          </h1>
        </div>
        <p className={styles.highlight}>MAIOR FORNECEDOR DE MANUAIS DO BRASIL!</p>
        <img src={img} />
        <p>PARTIDA+ MOTOR+ IGUINIÇÃO+ MODULOS..</p>
        <Button>
        sim, eu quero meus manuais agora!
      </Button>
    </div>
  )
}

export default Headline;