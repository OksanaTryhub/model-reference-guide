import React from 'react'
import logo from '../../images/logo.png'

import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href='https://zgoda.ua/'>
            <img src={logo} alt='Logo' width={200}/>
          </a>
        </div>
        <div className={styles.contacts} >
          <div className={styles.contact_el}>
            <p className={styles.text}>Головний офіс м.Дніпро</p>
            <a href='tel:+38067037508'>+38 067 403 75 08</a>
            <a href='tel:+380567907103'>+38 056 790 71 03</a>
          </div>
          <div className={styles.contact_el}>
            <p className={styles.text}>Філія м.Львів</p>
            <a href='tel:+380978926262'>+38 097 892 62 62</a>
          </div>
          <div className={styles.contact_el}>
            <a href='mailto:info@zgoda.dp.ua'>info@zgoda.dp.ua</a>
            <a href='https://zgoda.ua/'>zgoda.ua</a>
         </div>
        </div>
      </div>
    </header>
  )
}

export default Header
