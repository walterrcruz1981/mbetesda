import React from 'react'
import VideoDetails from './VideoDetails'


function DetailsPage({ params }) {
    return (
        <div>
            <VideoDetails id={params.videoDescription} />
        </div>
    )
}

export default DetailsPage