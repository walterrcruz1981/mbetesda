
import React from 'react'
import styles from '../Sermones.module.scss'
import NextSteps from './NextSteps'
import PlayBack from './PlayBack'
import RecentSermons from './RecentSermons'


async function VideoDetail({ id }) {
    const response = await fetch('http://localhost:3000/api/sermones').then(res => res.json())
    const [video1, video2, video3] = response;
    const recentSermons = [video1, video2, video3]
    const filteredData = response.filter(video => video.id.videoId === id)
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