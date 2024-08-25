import styles from "./Promise.module.css";
import img_1 from "../../assets/mechanic/promise/img_1.svg";
import img_2 from "../../assets/mechanic/promise/img_2.svg";
import img_3 from "../../assets/mechanic/promise/img_3.svg";
import img_4 from "../../assets/mechanic/promise/img_4.svg";
import check from "../../assets/mechanic/promise/check.svg";

const Promise = () => {
  return (
    <div className={styles.container}>
      <h1>
        Chega de clientes apertando sua paciência. Faça consertos com Rapidez.
      </h1>
      <div className={styles.img_container}>
        <div>
          <img src={img_1} />
          <h1>Soluções Rápidas e Completas para Qualquer Problema de Moto</h1>
          <p className={styles.text_container}>
            Chega de perder tempo procurando soluções ou lidando com informações
            incompletas. Com nosso manual, você terá tudo que precisa em mãos
            para resolver qualquer problema, de maneira rápida e precisa.
          </p>
        </div>
        <div>
          <img src={img_2} />
          <h1>Impressione seus clientes:</h1>
          <p className={styles.text_container}>
            Nada frustra mais do que um reparo demorado. Agora, com as
            informações certas ao seu alcance, você poderá impressionar seus
            clientes com diagnósticos rápidos e soluções eficientes.
          </p>
        </div>
      </div>
      <div className={styles.img_container}>
        <div>
          <img src={img_3} />
          <h1>Aumente sua produtividade:</h1>
          <p className={styles.text_container}>
            Tempo é dinheiro! Nosso manual é projetado para minimizar o tempo de
            pesquisa e maximizar o tempo de ação, aumentando a quantidade de motos
            que você consegue reparar em um dia.
          </p>
        </div>
        <div>
          <img src={img_4} />
          <h1>Invista no seu conhecimento:</h1>
          <p className={styles.text_container}>
            Ser um especialista em motos vai muito além do básico. Domine técnicas
            avançadas e métodos comprovados para se tornar a referência em reparo
            de motos na sua região.
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <h1>Lista de Benefícios</h1>
        <ul>
          <li>
            <img src={check} className={styles.img_check} />
            Chega de ficar Horas Procurando Problema
          </li>
          <li>
            <img src={check} className={styles.img_check} />
            Saiba todo Funcionamento elétrico.
          </li>
          <li>
            <img src={check} className={styles.img_check} />
            Aplicando o novo método de conserto Otimize seu tempo em 10x.
          </li>
          <li>
            <img src={check} className={styles.img_check} />
            Aumente seu desempenho nos reparos.​
          </li>
          <li>
            <img src={check} className={styles.img_check} />
            Vários Manuais de Variados modelos.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Promise;
