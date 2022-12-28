import Link from 'next/link'
import React from 'react'
import { MyImage } from '../../variables'
import styles from '../Component.module.scss'
import Image from 'next/image'

function LinkCard({ content }) {
    return (
        <div style={{ height: content.height }} className={styles.linkCardContainer + ' box-shadow'}>

            <Image src={content.imageUrl} width={300} height={150} alt={content.title} />
            <div className={styles.cardContent + ' flex-center-column'}>
                <h3>{content.subTitle}</h3>
                <h1>{content.title}</h1>
                <Link href={content.buttonLink}>{content.buttonText}</Link>
            </div>
        </div>
    )
}

export default LinkCard