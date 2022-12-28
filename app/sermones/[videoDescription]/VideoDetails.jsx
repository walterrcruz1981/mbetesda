
import React from 'react'
import styles from '../Sermones.module.scss'
import NextSteps from './NextSteps'
import PlayBack from './PlayBack'
import RecentSermons from './RecentSermons'
const newArray = [];
const fetchVideos = async (videoId) => {

    const url = `https://youtube.googleapis.com/youtube/v3/videos?&part=snippet,contentDetails&id=${videoId}&key=`;
    const data = await fetch(url + process.env.YOUTUBE_API, { next: { revalidate: 10 } })

    return data.json();
}

async function VideoDetail({ id }) {
    const videoDetail = await fetchVideos(id)
    const videoArray = [id, 'Q1Ap0TajIQA', 'z_Wnd4MoZOo', 'Dpjs3AzXGxY']
    for (let videoID of videoArray) {
        await fetchVideos(videoID)
    }

    const suggestionVideos = newArray.slice(-3)
    return (
        <div className={styles.sermonesDescriptionContainer}>
            <PlayBack id={id} content={videoDetail.items[0]} />
            <NextSteps />
            <div className={styles.recentContainerWrapper}>
                <RecentSermons content={suggestionVideos} />
            </div>
        </div>
    )
}

export default VideoDetail