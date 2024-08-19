import styles from "./WhatYouWillReceive.module.css";
import img from "../../assets/headline-image.png";

const WhatYouWillReceive = () => {
  return (
    <div className={styles.container}>
      <h1>O que você vai ter acesso no pacote:</h1>
      <div className={styles.main_container_content}>
      <div className={styles.container_content}>
          <img src={img} />
          <div className={styles.container_text}>
            <h2>manuais DE funcionamento motos Honda</h2>
            <p>
              O nosso Manual de Funcionamento para Motos Honda é uma ferramenta
              essencial para todos os proprietários e entusiastas da marca. Com
              instruções detalhadas, esquemas ilustrados e dicas de manutenção,
              este manual cobre todos os aspectos do funcionamento e cuidado de
              sua moto Honda.
            </p>
        </div>
        </div>
        <div className={styles.container_content}>
          <img src={img} />
          <div className={styles.container_text}>
            <h2>manuais DE funcionamento motos Yamaha</h2>
            <p>
              Descubra o potencial completo de sua moto Yamaha com o nosso
              Manual de Funcionamento exclusivo. Este guia abrangente fornece
              todas as informações necessárias para manter e melhorar o
              desempenho de sua moto, desde rotinas de manutenção básica até
              ajustes avançados.
            </p>
          </div>
        </div>
        <div className={styles.container_content}>
          <img src={img} />
          <div className={styles.container_text}>
            <h2>manuais de funcionamento motos Dafra</h2>
            <p>
              O Manual de Funcionamento para Motos Dafra é o recurso definitivo
              para proprietários que desejam entender e otimizar cada aspecto de
              suas motos. Com conteúdo abrangente e instruções detalhadas, o
              manual cobre desde a manutenção regular até a solução de problemas
              específicos.
            </p>
          </div>
        </div>
        <div className={styles.container_content}>
          <img src={img} />
          <div className={styles.container_text}>
            <h2>Manual de Funcionamento para Motos Suzuki</h2>
            <p>
              Maximize a vida útil e o desempenho de sua moto Suzuki com nosso
              Manual de Funcionamento detalhado. Este guia essencial abrange
              todas as facetas da manutenção e operação, desde verificações
              diárias até reparos complexos.
            </p>
          </div>
        </div>
        <div className={styles.container_content}>
          <img src={img} />
          <div className={styles.container_text}>
            <h2>Manual de Funcionamento para Motos Kasinski</h2>
            <p>
              O Manual de Funcionamento para Motos Kasinski é seu aliado
              perfeito na manutenção e operação de sua moto. Este guia completo
              oferece uma visão aprofundada de todos os aspectos da moto, com
              instruções detalhadas, esquemas ilustrados e dicas práticas de
              manutenção.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatYouWillReceive;
