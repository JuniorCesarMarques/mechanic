import styles from './Button.module.css';

const Button = ({children, margin}) => {
  return (
    <button style={{margin:margin }} className={styles.container}>
        {children}
    </button>
  )
}

export default Button;