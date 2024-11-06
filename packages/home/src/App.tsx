import type { MicrolcApi, BaseExtension } from '@micro-lc/orchestrator'
import React, { useEffect } from 'react'

import styles from './App.module.css'
import Banner from './components/Banner'
import Cards from './components/Cards'
import Header from './components/Header'

export default function App({ microlcApi }: { microlcApi?: MicrolcApi<BaseExtension> }): JSX.Element {
  useEffect(() => {
    // Timeout is needed to override Docusaurus Helmet
    setTimeout(() => microlcApi?.getExtensions().head?.setTitle('Dev Portal'), 100)
  }, [microlcApi])

  return (
    <div>
      <Header />
      <Banner microlcApi={microlcApi} />
      <div className={styles.page_container}>
        <main>
          <div className={styles.discover_more}>
            <span>Discover more</span>
          </div>
          <Cards microlcApi={microlcApi} />
        </main>
      </div>
    </div>
  )
}
