import logoFooter from '../../assets/kasa-logo-footer.svg'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img src={logoFooter} alt="" />
        <p className={styles.credit}>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
