import liveData from '../../public/youtubedata.json'

// const youtubeApiUrl = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC8br10Qoo5bZvTKiJhPkdOA&eventType=live&order=date&type=video&key='
// const liveVideos = async () => {
//     const getVideos = await fetch(`${youtubeApiUrl}${process.env.YOUTUBE_API}`)
//         .then(res => res.json())
//     return getVideos
// }

export default async function getLiveVideos(req, res) {
    // const videos = await liveVideos()
    if (req.method === 'GET') {
        res.status(200).json(liveData)
    } else {
        res.status(500).json({ msg: 'operation not allowed' })
    }
}