import styles from "./Promise.module.css";
// import img from '../../assets/second-img.jpg';

const Promise = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h1>
          Pra quem é?
        </h1>
        <ul>
          <li>
            <p>Deseja atrair potenciais clientes por meio das redes sociais e transmitir uma imagem profissional.</p>
          </li>
          <li>
            <p>Quer ter um feed bonito e profissional que transmita autoridade</p>
          </li>
          <li>
            <p>Não tem muito tempo parar criar artes do zero</p>
          </li>
          <li>
            <p>Não tem muito conhecimento de design e perde muito tempo tentando criar suas artes</p>
          </li>
        </ul>
      </div>
      <div>
        </div>
    </div>
  );
};

export default Promise;
