import { Link } from 'react-router-dom'

import styles from './card.module.css'

const Card = ({ hosting }) => {
  //Create the "Subroute" to hosting details and pass it the id to use with useParams
  const hostingId = `../hosting/${hosting.id}`
  return (
    // create a tag and navigate to hosting page on click
    <Link to={hostingId} className={styles.card}>
      <h3 className={styles.title}>{hosting.title}</h3>
      <picture>
        <source srcSet={hosting.cover} />
        <img
          className={styles.card__img}
          src={hosting.cover}
          alt={`Photographie de couverture de ${hosting.title}`}
        />
      </picture>
    </Link>
  )
}

export default Card
