import styles from './banner.module.css'

const Banner = ({ title, alt, imgsrc, imgsrcXS }) => {
  return (
    <header className={`banner ${styles.banner}`}>
      {title && <h2 className={styles.title}>{title}</h2>}      
        <picture>
          <source srcSet={imgsrc} media="(min-width: 768px)" />
          <img
            className={styles.banner__img}
              src={imgsrcXS ? imgsrcXS : imgsrc}
              alt={alt}
            />       
          </picture>
    </header>
  )
}

export default Banner
