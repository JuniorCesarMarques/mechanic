import styles from './Button.module.css';
import { motion } from 'framer-motion';

const Button = ({children}) => {
  return (
    <a href="https://pay.kiwify.com.br/QgebggO">
      <motion.button className={styles.container}
      initial={{scale: 1}}
      animate={{scale: 1.1}}
      transition={{duration: 1, repeat: Infinity, repeatType: "reverse"}}
      >
          {children}
      </motion.button>
    </a>
  )
}

export default Button;