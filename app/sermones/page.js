import Link from 'next/link'
import React from 'react'
import VideoCard from './VideoCard';
import styles from './Sermones.module.scss'

async function Sermones() {

    const url = 'https://youtube.googleapis.com/youtube/v3/search?&part=snippet&channelId=UC8br10Qoo5bZvTKiJhPkdOA&order=date&maxResults=20&key=';
    const videos = await fetch(`${url + process.env.YOUTUBE_API}`)
        .then(res => res.json())
    console.log(videos.items, 'response from sermones page');
    return (
        <div className={styles.sermonesContainer + ' responsive-grid'}>
            {videos.items?.map((video, index) => {
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