import styles from "./Advantages.module.css";
import check from "../../assets/mechanic/promise/check.svg";
import check_circle from "../../assets/mechanic/promise/check_circle.svg";

const Advantages = () => {
  const year = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <div className={styles.cards_container}>
        <div className={styles.card}>
          <div className={styles.svg_container}>
            <h3>Para quem é o Manual de Reparo para Motos?</h3>
          </div>
          <ul>
            <li>
              <img src={check} />{" "}
              <p>
                Para profissionais de mecânica de motos que desejam otimizar o
                tempo de reparo.
              </p>
            </li>
            <li>
              <img src={check} />{" "}
              <p>
                Para quem busca um guia completo e confiável que cubra todas as
                marcas de motos.
              </p>
            </li>
            <li>
              <img src={check} />{" "}
              <p>
                Para quem quer se destacar no mercado com diagnósticos rápidos e
                reparos precisos.
              </p>
            </li>
            <li>
              <img src={check} />{" "}
              <p>
                Para oficinas que buscam aumentar sua produtividade e
                eficiência.
              </p>
            </li>
            <li>
              <img src={check} />{" "}
              <p>
                Para quem deseja melhorar continuamente e oferecer um serviço de
                alta qualidade.
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.card}>
          <div className={styles.svg_container}>
            <h3>O que você terá acesso?</h3>
          </div>
          <ul>
            <li>
              <img src={check_circle} />
              <p>
                Manual completo de reparo para todas as principais marcas de
                motos.
              </p>
            </li>
            <li>
              <img src={check_circle} />
              <p>Acesso vitalício com atualizações constantes.</p>
            </li>
            <li>
              <img src={check_circle} />
              <p>Suporte técnico especializado para tirar suas dúvidas.</p>
            </li>
            <li>
              <img src={check_circle} />
              <p>Guias de manutenção preventiva para fidelizar clientes.</p>
            </li>
            <li>
              <img src={check_circle} />
              <p>
                Métodos avançados de diagnóstico e reparo para otimizar seu
                tempo.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
