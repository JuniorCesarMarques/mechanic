import styles from "./Promise.module.css";
// import img from '../../assets/second-img.jpg';
import { FaCheck } from "react-icons/fa";


const Promise = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h1>
          Pra quem é?
        </h1>
        <ul>
          <li>
            <FaCheck />
            <p>Não tem ideias para seus conteúdos que geram relacionamento com a sua audiência.</p>
          </li>
          <li>
          <FaCheck />
            <p>Não tem muito tempo parar criar artes do zero.</p>
          </li>
          <li>
          <FaCheck />
            <p>Quer ter um feed bonito e profissional que transmita autoridade.</p>
          </li>
          <li>
          <FaCheck />
            <p>Deseja atrair potenciais clientes por meio das redes sociais e transmitir uma imagem profissional.</p>
          </li>
        </ul>
      </div>
      <div>
        </div>
    </div>
  );
};

export default Promise;
