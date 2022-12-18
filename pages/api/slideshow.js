
import prisma from '../../app/data/prisma'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const createdSlides = JSON.parse(req.body);
        await prisma.HomeSlideShow.create({
            data: createdSlides
        })
        res.send(createdSlides)
    } else if (req.method === 'DELETE') {
        const toDelete = JSON.parse(req.body);
        await prisma.HomeSlideShow.delete({
            where: {
                id: toDelete
            }
        })
        res.status(200).json({ message: 'Object deleted' })
    }
}