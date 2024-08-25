import styles from './Guarantee.module.css';
import img from '../../assets/mechanic/guarantee.png';

const Guarantee = () => {
  return (
    <div className={styles.container}>
        <img src={img} />
        <p>O código de defesa consumidor (Art. 49) garante 7 dias para solicitar reembolso em caso de insatisfação com o produto. Nós confiamos tanto em nossos estudos e pesquisas que lhe garantimos 7 dias de garantia incondicional!</p>
    </div>
  )
}

export default Guarantee;