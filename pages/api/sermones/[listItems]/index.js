
export default async function (req, res) {
    const listId = req.query.listItems;
    const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?&part=snippet,contentDetails&playlistId=${listId}&channelId=UC8br10Qoo5bZvTKiJhPkdOA&maxResults=25&order=date&key=`;
    const getListItems = await fetch(url + process.env.YOUTUBE_API)
        .then(res => res.json())
    res.status(200).json(getListItems)
}