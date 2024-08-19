import styles from './Promise.module.css';
import Button from '../Button/Button';

const Promise = () => {
  return (
    <div className={styles.container}>
        <h1>Chega de clientes apertando sua paciência.
        Faça consertos com Rapidez.</h1>
        <div className={styles.content}>
            <h2>Aprenda o segredo que os Mecânicos de sucesso não revelam!</h2>
            <ul>
                <li>Chega de ficar Horas Procurando Problema</li>
                <li>Saiba todo Funcionamento elétrico.</li>
                <li>Aplicando o novo método de conserto Otimize seu tempo em 10x.</li>
                <li>Aumente seu desempenho nos reparos.​</li>
                <li>Vários Manuais de Variados modelos.</li>
            </ul>
            <Button margin="30px auto">
                Quero acesso ao meu pacote agora!
            </Button>
        </div>
    </div>
  )
}

export default Promise;