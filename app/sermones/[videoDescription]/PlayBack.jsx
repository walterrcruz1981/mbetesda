'use client'
import React from 'react'
import styles from '../Sermones.module.scss'
import TimeAgo from 'react-timeago'

function PlayBack({ content }) {
    const videoToPlay = `https://www.youtube.com/embed/${content.id}`

    return (
        <div className={styles.playbackContainer}>
            <iframe src={videoToPlay} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <h1>{content.snippet.title}</h1>
            <p>Publicado hace: <TimeAgo date={content.snippet.publishedAt} /></p>
            <div dangerouslySetInnerHTML={{ __html: content.snippet.description }}>
            </div>


        </div>
    )
}

export default PlayBack