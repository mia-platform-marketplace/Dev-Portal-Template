import React from 'react'

import { ReactComponent as IndexHero } from '../../assets/index-hero.svg'

import styles from './Header.module.css'

export default function Header(): JSX.Element {
  return (
    <header className={styles.header_container}>
      <div className={styles.header_content}>
        <h1 className={`${styles.header_content_title} ${styles.header_content_title_primary}`}>Company</h1>
        <h1 className={styles.header_content_title}>Developer Portal</h1>
        <p className={styles.header_content_subtitle}>A GitOps oriented document portal</p>
      </div>
      <div className={styles.header_container}>
        <IndexHero className={styles.hero_container}/>
      </div>
    </header>
  )
}
