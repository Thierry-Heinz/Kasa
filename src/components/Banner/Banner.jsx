import styles from './banner.module.css'

const Banner = ({ title, imgsrc }) => {
  return (
    <header className={`banner ${styles.banner}`}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {imgsrc && (
        <img
          className={styles.banner__img}
          src={imgsrc}
          alt={
            title
              ? `Bannière de la page d'accueil: ${title}`
              : 'Bannière de la page à propos'
          }
        />
      )}
    </header>
  )
}

export default Banner
