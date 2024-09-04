import styles from "./CallToAction.module.css";
import Button from '../Button/Button';

const CallToAction = () => {
  return (
    <div className={styles.container}>
      <h1>Descubra por que sua farmácia ainda não está alcançando o sucesso nas redes sociais</h1>
      <h3>Identifique os desafios que estão impedindo o crescimento digital da sua farmácia e saiba como superá-los</h3>
      <div className={styles.cards_container}>
        <p>
        Já tentou criar postagens para sua farmácia, mas o engajamento nunca veio? Ou talvez você não consiga manter a consistência nas redes sociais. Se isso parece familiar, saiba que muitos gestores de farmácia enfrentam esses mesmos desafios.
        </p>
        <p>
        O sucesso online exige mais do que apenas postar. Falta de tempo, dificuldade em criar conteúdo atrativo e inexperiência com ferramentas de design são obstáculos que podem estar impedindo o crescimento digital da sua farmácia.
        </p>
        <p>
        Esses obstáculos podem estar custando caro para seu negócio. Sem uma presença digital forte, sua farmácia perde a chance de atrair novos clientes e construir autoridade na comunidade
        </p>
        <p>
        Com o Pack Canva para Farmácias, você ganha mais de 50 artes prontas e editáveis, economizando tempo e garantindo postagens profissionais. E ainda acompanha um mini curso para ajudar você a dominar o design, mesmo sem experiência.
        </p>
      </div>
      <h3>
        "Não perca mais tempo. Garanta o Pack Canva para Farmácias e transforme sua presença online!"
      </h3>
    <Button>
    sim, eu quero garantir meu pack agora mesmo!
    </Button>
    </div>
  );
};

export default CallToAction;
