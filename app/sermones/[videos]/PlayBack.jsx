import React from 'react'
import styles from '../Sermones.module.scss'

async function PlayBack({ content, id }) {
    const videoToPlay = `https://www.youtube.com/embed/${id}`

    return (
        <div className={styles.playbackContainer}>
            <iframe src={videoToPlay} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <h1>{content.snippet.title}</h1>
            <h4>{content.snippet.publishedAt}</h4>
            <p>{content.snippet.description}</p>
        </div>
    )
}

export default PlayBack