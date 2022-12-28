
import React from 'react'
import styles from './Sermones.module.scss'
import { MyImage } from '../variables'

function VideoCard({ content }) {
    const avatar = 'https://yt3.googleusercontent.com/ytc/AMLnZu_SlXJycaUlJ8xrty-TXQ0EdJSVXb1XNDwlNwPltA=s88-c-k-c0x00ffffff-no-rj'
    return (
        <div className={styles.videoCardContainer + ' flex-center-column'}>
            <div className={styles.imageContainer}>
                {MyImage(content.imageUrl)}
            </div>
            <div className={styles.infoContent}>
                <div className={styles.titleContent + ' flex'}>
                    <div className={styles.avatar}>
                        {MyImage(avatar)}
                    </div>
                    <div>
                        <h3>{content.title}</h3>
                    </div>

                </div>

            </div>
        </div >
    )
}

export default VideoCard