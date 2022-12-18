import Link from 'next/link'
import React from 'react'
import VideoCard from './VideoCard';
import styles from './Sermones.module.scss'

async function Sermones() {
    const videos = await fetch('http://localhost:3000/api/sermones')
        .then(res => res.json());
    return (
        <div className={styles.sermonesContainer + ' responsive-grid'}>
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
    )
}

export default Sermones