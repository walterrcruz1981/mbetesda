
import React from 'react'
import styles from '../Sermones.module.scss'
import NextSteps from './NextSteps'
import PlayBack from './PlayBack'
import RecentSermons from './RecentSermons'


async function VideoDetail({ id }) {

    const url = 'https://youtube.googleapis.com/youtube/v3/search?&part=snippet&channelId=UC8br10Qoo5bZvTKiJhPkdOA&order=date&maxResults=20&key=';

    const response = await fetch(`${url + process.env.YOUTUBE_API}`)
        .then(res => res.json())
    const [video1, video2, video3] = response.items;
    const recentSermons = [video1, video2, video3]
    const filteredData = response.items.filter(video => video.id.videoId === id)
    return (
        <div className={styles.sermonesDescriptionContainer}>
            <PlayBack content={filteredData[0]} id={id} />
            <NextSteps />
            <div className={styles.recentContainerWrapper}>
                <RecentSermons content={recentSermons} />
            </div>
        </div>
    )
}

export default VideoDetail