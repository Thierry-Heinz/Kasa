import { useState } from 'react'
import styles from './collapse.module.css'
import angleUp from '../../assets/angle-up.svg'

const Collapse = ({ header, content }) => {
  const [collapsed, setCollapse] = useState(true)

  const toggle = () => {
    setCollapse(!collapsed)
  }

  return (
    <div className={`${styles.collapse} ${!collapsed && styles.active}`}>         
        <button className={styles.header}
          onClick={toggle}
          aria-expanded={collapsed}
          aria-controls="content-collapse"
          aria-label={`Voir les informations concernant: ${header}`}
        >
          <h4 className={styles.title}>
           {header}
          </h4>
          <img src={angleUp} alt="" />
        </button>
   

      <div id="content-collapse" className={styles.content}>
        {/* display content if collapsed is false */}
        {!collapsed &&
        // if the content of th collapse is an array of element mao on it or just display the content
          (Array.isArray(content) ? (
            <ul>
              {content.map((item, i) => (
                <li key={`${item}+${i}`}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          ))}
      </div>
    </div>
  )
}
export default Collapse
