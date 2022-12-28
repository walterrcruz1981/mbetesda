

export default async function getVideos(req, res) {
    const videoId = req.query.videoInfo;
    const url = `https://youtube.googleapis.com/youtube/v3/videos?&part=snippet,contentDetails&id=${videoId}&key=`;
    const getVideoDescription = await fetch(url + process.env.YOUTUBE_API)
        .then(res => res.json())
    res.status(200).json(getVideoDescription.items[0])
}   