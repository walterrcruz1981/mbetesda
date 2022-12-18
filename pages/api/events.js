import prisma from '../../app/data/prisma'



export default async function handler(req, res) {
    if (req.method === 'POST') {
        const eventData = JSON.parse(req.body);
        const savedEvent = await prisma.event.create({
            data: eventData
        })
        res.json({ message: 'event created' })
    } else if (req.method === 'GET') {
        const data = await prisma.event.findMany();
        res.status(200).json(data)
    } else if (req.method === 'DELETE') {
        const deleteEvent = JSON.parse(req.body)
        const eventToDelete = await prisma.event.delete({
            where: {
                id: deleteEvent
            }
        })
        res.status(200).json(eventToDelete)
    }
    res.status(500).json({ method: 'method is invalid please only use POST' })
}