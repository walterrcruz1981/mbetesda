import React from 'react'
import styles from './Grupos.module.scss'
import { gruposInfo, gruposDescription } from './gruposContent'
import { MyImage } from '../../variables'
import Tab from '../../components/tabs/Tab'
import Suggestions from '../../components/Suggestions'

function GruposPequenos() {
    return (
        <div className={styles.gruposContainer}>
            <div className={styles.heroImage}>
                {MyImage(gruposInfo.imageUrl)}
            </div>
            <div className={styles.introText}>
                <h1>{gruposInfo.title}</h1>
                {gruposInfo.description}
            </div>
            <Tab content={gruposDescription} />
            <Suggestions />
        </div>
    )
}

export default GruposPequenos