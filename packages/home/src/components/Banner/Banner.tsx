import type { MicrolcApi, BaseExtension } from '@micro-lc/orchestrator'
import React from 'react'

import styles from './Banner.module.css'

export default function Banner({ microlcApi }: { microlcApi?: MicrolcApi<BaseExtension> }): JSX.Element {
  return (
    <div className={styles.banner_container}>
      <span className={styles.banner_documentation}>
        Find out our documentation!
      </span>

      <div className={styles.banner_button_container}>
        <div
          className={styles.banner_button}
          onClick={(() => { microlcApi?.router.goTo('./documentation/') })}
        >
          Start learning
        </div>
      </div>
    </div>
  )
}
