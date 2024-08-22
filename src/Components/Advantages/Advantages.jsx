import Button from '../Button/Button';
import styles from './Advantages.module.css';
import { RiComputerLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

const Advantages = () => {

    const year = new Date().getFullYear(); 


  return (
    <div className={styles.container}>
        <h1>Vantagens do <span className={styles.highlight}>meu manual de reparo</span></h1>
        <div className={styles.cards_container}>
            <div className={styles.card}>
                <div className={styles.svg_container}> 
                    <h3>Acesso vitalício</h3>
                </div>
                <ul>
                    <li><FaCheck /><p>Honda</p></li>
                    <li><FaCheck /><p>Yamaha</p></li>
                    <li><FaCheck /><p>Suzuki</p></li>
                    <li><FaCheck /><p>Dafra</p></li>
                </ul>
            </div>
            <div className={styles.card}>
                <div className={styles.svg_container}>
                    <h3>Modelos atualizados</h3>
                </div>
                <ul>
                    <li><FaCheck /><p>Acesse quando quiser</p></li>
                    <li><FaCheck /><p>Disponível 24 horas</p></li>
                    <li><FaCheck /><p>Acesse pelo celular ou computador</p></li>
                    <li><FaCheck /><p>7 dias de garantia</p></li>
                </ul>
            </div>
            <div className={styles.card}>
                <div className={styles.svg_container}>
                    <h3>conteudo de {year}/{year + 1}</h3>
                </div>
                <ul>
                    <li><FaCheck /><p>Novos manuais</p></li>
                    <li><FaCheck /><p>Método atualizado</p></li>
                    <li><FaCheck /><p>Motos mais vendidas</p></li>
                    <li><FaCheck /><p>Atualização constante</p></li>
                </ul>
                
            </div>
        </div>
        <Button>
            sim, eu quero meus manuais agora!
        </Button>
    </div>
  )
}

export default Advantages;