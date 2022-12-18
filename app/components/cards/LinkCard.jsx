import Link from 'next/link'
import React from 'react'
import { MyImage } from '../../variables'
import styles from '../Component.module.scss'

function LinkCard({ content }) {
    return (
        <div style={{ height: content.height }} className={styles.linkCardContainer + ' box-shadow'}>
            {MyImage(content.imageUrl)}
            <div className={styles.cardContent + ' flex-center-column'}>
                <h3>{content.subTitle}</h3>
                <h1>{content.title}</h1>
                <Link href={content.buttonLink}>{content.buttonText}</Link>
            </div>
        </div>
    )
}

export default LinkCard