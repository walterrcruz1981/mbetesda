import Link from "next/link";
import VideoCard from "./VideoCard";

const fetchPlayListItems = async (playListId) => {
    const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?&part=snippet,contentDetails&playlistId=${playListId}&channelId=UC8br10Qoo5bZvTKiJhPkdOA&maxResults=25&order=date&key=`;

    const videos = await fetch(url + process.env.YOUTUBE_API, { next: { revalidate: 10 } })
        .then(res => res.json())
    return videos
}

export default async function PlayList({ id }) {
    const playListItems = await fetchPlayListItems(id)

    return (
        <div className="responsive-grid-large">
            {playListItems.items?.map(video => {
                const { contentDetails = {}, snippet = {}, id } = video
                const { title, description, publishedAt } = snippet;
                const { videoId } = contentDetails;
                const { url } = snippet.thumbnails.medium;
                const videoData = {
                    id: id,
                    title: title,
                    description: description,
                    publishedAt: publishedAt,
                    imageUrl: url
                }
                return (
                    <div key={video.id}>
                        <Link href={'/sermones/' + videoId}>
                            <VideoCard content={videoData} />
                        </Link>
                    </div>
                )
            }
            )}
        </div>
    )
}