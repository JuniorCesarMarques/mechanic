import styles from './Button.module.css';

const Button = ({children, margin}) => {
  return (
    <a target='blank' href="https://pay.kiwify.com.br/L7oHyFs">
      <button style={{margin:margin }} className={styles.container}>
          {children}
      </button>
    </a>
  )
}

export default Button;