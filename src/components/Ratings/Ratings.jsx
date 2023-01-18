import styles from './ratings.module.css'
import greyStar from '../../assets/grey-star.svg'
import redStar from '../../assets/red-star.svg'

const Ratings = ({ rating }) => {
  const onTotal = 5;

  // display a number of either red or grey star out of five, fom rating data
  return (
    <div className={styles.ratings}>
      {[...Array(onTotal)].map((_, i) => {
        return i < rating ? (
          <img src={redStar} key={`rating${i}`} alt="étoile rouge" />
        ) : (
          <img src={greyStar} key={`rating${i}`} alt="étoile grise" />
        )
      })}
    </div>
  )
}

export default Ratings
