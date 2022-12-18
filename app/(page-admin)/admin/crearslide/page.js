import React from 'react'
import CrearSlide from './CrearSlide'
import prisma from '../../../data/prisma'

async function CrearSlidePage() {
    const slideData = await prisma.HomeSlideShow.findMany({
        select: {
            buttonText: true,
            imageUrl: true,
            id: true
        }
    })

    return (
        <div>
            <CrearSlide content={slideData} />
        </div>
    )
}

export default CrearSlidePage