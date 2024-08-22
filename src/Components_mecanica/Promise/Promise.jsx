import styles from './Promise.module.css';
import Button from '../Button/Button';
import img from '../../assets/mechanic/promise/mapa_mental.svg';
import { FaCheck } from "react-icons/fa";

const Promise = () => {
  return (
    <div className={styles.container}>
        <h1>Chega de clientes apertando sua paciência.
        Faça consertos com Rapidez.</h1>
        <img src={img} />
        <div className={styles.content}>
            <h1>Aprenda o segredo que os Mecânicos de sucesso não revelam!</h1>
            <ul>
                <li><FaCheck />Chega de ficar Horas Procurando Problema</li>
                <li><FaCheck />Saiba todo Funcionamento elétrico.</li>
                <li><FaCheck />Aplicando o novo método de conserto Otimize seu tempo em 10x.</li>
                <li><FaCheck />Aumente seu desempenho nos reparos.​</li>
                <li><FaCheck />Vários Manuais de Variados modelos.</li>
            </ul>
            <Button margin="30px auto">
                Quero acesso ao meu pacote agora!
            </Button>
        </div>
    </div>
  )
}

export default Promise;