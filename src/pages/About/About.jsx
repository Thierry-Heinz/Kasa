//Component
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import AboutBanner from '../../assets/AboutBanner.jpg'

import styles from './about.module.css'
import utils from '../../utils.module.css'

// adding collapse data for about page
const data = [
  {
    id: 0,
    header: 'Fiabilité',
    content:
      'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
  },
  {
    id: 1,
    header: 'Respect',
    content:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    id: 2,
    header: 'Service',
    content:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    id: 3,
    header: 'Sécurité',
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
]

const About = () => {
  return (
    <main className={styles.about}>
      <Banner imgsrc={AboutBanner} />
      <h1 className={utils.screenReader}>About</h1>
      <div className={styles.collapses}>
        {data.map((data) => (
          <Collapse
            key={data.id + data.header}
            header={data.header}
            content={data.content}
          />
        ))}
      </div>
    </main>
  )
}
export default About
