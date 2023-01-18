import data from '../../assets/logements.json'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import HomeBannerSrc from '../../assets/HomeBanner.jpg'

import styles from './home.module.css'
import utils from '../../utils.module.css'

const Home = () => {
  return (
    <main className={styles.home}>
      <h1 className={utils.screenReader}>Kasa</h1>
      <Banner
        mt={63}
        title="Chez vous, partout et ailleurs"
        alt="Bannière de la page d'accueil"
        imgsrc={HomeBannerSrc}
      />
      <section className={styles.home__hostingSection}>
        {data.map((data) => (
          <Card key={data.id} hosting={data} />
        ))}
      </section>
    </main>
  )
}

export default Home
