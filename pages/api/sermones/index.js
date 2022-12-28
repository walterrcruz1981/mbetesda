

const url = 'https://youtube.googleapis.com/youtube/v3/playlists?&part=snippet,id,contentDetails&channelId=UC8br10Qoo5bZvTKiJhPkdOA&order=date&maxResults=10&key=';

export default async function sermones(req, res) {
    const youtubeVideos = await fetch(`${url + process.env.YOUTUBE_API}`)
        .then(res => res.json())

    if (req.method === 'GET') {
        res.status(200).json(youtubeVideos)
    } else {
        res.status(400).json({ message: 'Operation not allowed' })
    }
}