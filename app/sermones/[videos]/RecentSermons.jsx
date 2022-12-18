import Link from 'next/link'
import React from 'react'
import styles from '../Sermones.module.scss'
import VideoCard from '../VideoCard'

function RecentSermons({ content: videos }) {
    return (
        <div className={styles.recentSermonsContainer + ' flex'}>
            <h3>Sermones Recientes</h3>
            <div className='responsive-grid'>
                {videos?.map((video, index) => {
                    const { id = {}, snippet = {} } = video;
                    const { title, description, publishedAt, thumbnails = {} } = snippet;
                    const { url } = thumbnails.medium;
                    const videoData = {
                        id: id.videoId,
                        title: title,
                        description: description,
                        publishedAt: publishedAt,
                        imageUrl: url
                    }
                    return <Link key={index} href={'/sermones/' + id.videoId}><VideoCard content={videoData} /></Link>
                })}
            </div>
            <div className={styles.link + ' flex-center'}>
                <Link href={'/sermones'}>Mas Sermones</Link>
            </div>
        </div>
    )
}

export default RecentSermons