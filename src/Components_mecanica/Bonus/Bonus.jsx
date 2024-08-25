import styles from "./Bonus.module.css";

const Bonus = () => {
  return (
    <div className={styles.container}>
      <h1>Bônus Exclusivos</h1>
      <div className={styles.text_container}>
          <h2>Guia de Otimização de Oficina</h2>
          <p>
            Aprenda como organizar sua oficina para maximizar a produtividade e
            oferecer o melhor serviço aos seus clientes. - De: R$97,00 por: R$0
          </p>
      </div>
      <div className={styles.text_container}>
          <h2>Checklist de Manutenção Preventiva</h2>
          <p>Uma ferramenta essencial para oferecer um serviço completo e fidelizar seus clientes.
          - De: R$67,00 por: R$0</p>
      </div>
    </div>
  );
};

export default Bonus;
