import type { MicrolcApi, BaseExtension } from '@micro-lc/orchestrator'
import React from 'react'

import { ReactComponent as ArrowLongRight } from '../../assets/arrow-long-right.svg'
import { ReactComponent as Pages } from '../../assets/pages.svg'
import { ReactComponent as Plane } from '../../assets/plane.svg'

import styles from './Cards.module.css'

interface CardItem {
  Image: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  description: string
  microlcApi?: MicrolcApi<BaseExtension>
  onNavigateClick: (microlcApi?: MicrolcApi<BaseExtension>) => void
  title: string
}

const cardItems: CardItem[] = [
  {
    Image: Pages,
    description: 'Follow our guidelines and learn how to develop modern cloud-native applications.',
    onNavigateClick: (microlcApi) => { microlcApi?.router.goToApplication('marketplace').catch(() => { /* no-op */ }) },
    title: 'Marketplace',
  },
  {
    Image: Plane,
    description: 'Learn how APIs are organized, managed, and secured.',
    onNavigateClick: (microlcApi) => { microlcApi?.router.open('/documentations/api-portal', '_blank') },
    title: 'API Documentation',
  },
]

function Card({ Image, title, description, onNavigateClick, microlcApi }: CardItem): JSX.Element {
  return (
    <div className={styles.card_container}>
      { <Image className={styles.card_image} /> }
      <div className={styles.card_text_content}>
        <p className={styles.card_title}>{title}</p>
        <p className={styles.card_description}>{description}</p>
      </div>
      <div>
        <div className={styles.card_explore} onClick={(() => onNavigateClick(microlcApi))} >
          Explore
          <ArrowLongRight className={styles.card_explore_icon} />
        </div>
      </div>
    </div>
  )
}

export default function Cards({ microlcApi }: { microlcApi?: MicrolcApi<BaseExtension> }): JSX.Element {
  return (
    <div className={styles.card_row}>
      { cardItems.map((item, idx) => <Card key={idx} microlcApi={microlcApi} {...item} />) }
    </div>
  )
}
