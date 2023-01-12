import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/kasa-logo.svg'

import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.mainNav}>
      <Link to="/home">
        <img src={logo} className={styles.logo} alt="Kasa logo" />
      </Link>
      <nav className={styles.mainNav__nav}>
        <ul>
          <li>
            {/* redirect to home and if is active page add a bottom border  */}
            <NavLink
              className={({ isActive }) =>
                isActive && styles.active 
              }
              to="/home"
              >
              Accueil
            </NavLink>
          </li>
          <li>
            {/* redirect to about and if is active page add a bottom border  */}
            <NavLink
              className={({ isActive }) =>
                isActive && styles.active
              }
              to="/about"
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
