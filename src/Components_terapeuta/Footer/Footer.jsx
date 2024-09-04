import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <p>
        Todos os direitos reservados. Todo o conteúdo do site, todas as fotos,
        imagens, logotipos, marcas, layout, aqui veiculados são de propriedade
        exclusiva da empresa Agência Vieira. É
        vedada qualquer reprodução, total ou parcial, de qualquer elemento de
        identidade, sem expressa autorização. A violação de qualquer direito
        mencionado implicará na responsabilização cível e criminal nos termos da
        Lei.
      </p>
    </footer>
  );
};

export default Footer;
