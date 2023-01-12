import { Link } from 'react-router-dom'
import styles from './error.module.css'

const Error = () => {
  return (
    <div className={styles.error}>
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas. </h2>
      <Link to="/home">Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default Error
