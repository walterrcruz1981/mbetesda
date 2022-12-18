import React from 'react'
import VideoDetails from './VideoDetails'


async function DetailsPage({ params }) {
    const videoId = params.videos;

    return (
        <div>
            <VideoDetails id={videoId} />
        </div>
    )
}

export default DetailsPage