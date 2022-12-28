import React from 'react'
import styles from './Sermones.module.scss'
import PlayList from './PlayList';
const url = 'https://youtube.googleapis.com/youtube/v3/playlists?&part=snippet,id,contentDetails&channelId=UC8br10Qoo5bZvTKiJhPkdOA&order=date&maxResults=10&key=';

const getPlaylist = async () => {
    const playlist = await fetch(`${url + process.env.YOUTUBE_API}`, { next: { revalidate: 10 } })
    return playlist.json();
}

async function Sermones() {
    const playListsVideos = await getPlaylist()

    return (
        <div className={styles.sermonesContainer}>
            {playListsVideos.items?.map((list, index) => {
                const { id, contentDetails, snippet = {} } = list;
                const { title } = snippet;
                return (
                    <div className={index % 2 ? styles.playListContainer : ''} key={id} >
                        <h1>{title}</h1>
                        <p>{contentDetails.itemCount} {contentDetails.itemCount < 2 ? 'Video' : 'Videos'}</p>
                        <div className={styles.playList + 'responsive-grid-large'}>
                            <PlayList id={id} />
                        </div>
                        <hr />
                    </div>
                )

            })}


        </div>
    )
}

export default Sermones