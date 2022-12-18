import { estrategia } from "../../app/planpeace/peaceContent";
const url = 'https://youtube.googleapis.com/youtube/v3/search?&part=snippet&channelId=UC8br10Qoo5bZvTKiJhPkdOA&order=date&maxResults=20&key=';


export default async function sermones(req, res) {
    const youtubeVideos = await fetch(`${url + process.env.YOUTUBE_API}`)
        .then(res => res.json())

    if (req.method === 'GET') {
        res.status(200).json(youtubeVideos.items)
    } else {
        res.status(400).json({ message: 'Operation not allowed' })
    }
}