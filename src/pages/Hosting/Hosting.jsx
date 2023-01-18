import data from '../../assets/logements.json'
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styles from './hosting.module.css'

// Components
import Collapse from '../../components/Collapse'
import Slideshow from '../../components/Slideshow'
import Ratings from '../../components/Ratings'

const Hosting = () => {
  // retrieve the hosting id passed as params from the card link
  const { hostingId } = useParams()
  // find the right data corresponding to the hosting id param in the json 
  const hosting = data.find((hosting) => hosting.id === hostingId)
  // instantiate useNavigate
  const navigate = useNavigate()

  //if no hosting data was found go to error page (caught by the catch all on Routing Component)
  useEffect(() => {
    if(!hosting){
      navigate('/error')
    }
    }, [hosting, navigate])

    // if hosting data exist display the details layout
  if (hosting) {
    return (
      <main className={styles.hosting}>
        <Slideshow images={hosting.pictures} title={hosting.title} />
        <header className={styles.hosting__header}>
          <div className={styles.col}>
            <h2 className={styles.title}>{hosting.title}</h2>
            <h3 className={styles.subtitle}>{hosting.location}</h3>
            <div className={styles.tags}>
              {hosting.tags.map((tag, i) => (
                <span key={i + tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.host}>
              <h4 className={styles.hostName}>
                {hosting.host.name.replace(' ', '\r\n')}
              </h4>
              <img
                src={hosting.host.picture}
                alt={`Avatar de ${hosting.host.name}`}
                className={styles.avatar}
              />
            </div>
            <Ratings className={styles.ratings} rating={hosting.rating} />
          </div>
        </header>
        <div className={styles.infos}>
          <Collapse header="description" content={hosting.description} />
          <Collapse header="équipements" content={hosting.equipments} />
        </div>
      </main>
    )
  } 
}

export default Hosting
