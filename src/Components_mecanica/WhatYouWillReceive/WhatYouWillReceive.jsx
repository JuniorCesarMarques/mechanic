import styles from "./WhatYouWillReceive.module.css";

const WhatYouWillReceive = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main_container_content}>
      <div className={styles.container_content}>
          <div className={styles.container_text}>
            <h2>Por quê o Manual de Reparo para Motos Funciona?</h2>
            <p>
            Nosso manual é o resultado de anos de experiência e pesquisa, compilando as melhores práticas e soluções mais rápidas em um único lugar. Ele foi testado e aprovado por centenas de profissionais da área, garantindo que você tenha as informações mais precisas e eficazes.
            </p>
        </div>
        </div>
        <div className={styles.container_content}>
          <div className={styles.container_text}>
            <h2>E como funciona nossa metodologia?</h2>
            <p>
            Com o Manual de Reparo para Motos, você seguirá um passo a passo claro e direto, cobrindo desde diagnósticos até reparos complexos. Cada seção é desenhada para ser prática e fácil de seguir, mesmo durante os trabalhos mais desafiadores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatYouWillReceive;
