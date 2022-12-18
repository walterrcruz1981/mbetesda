import React from 'react'
import CrearEvento from './CrearEvento'
import prisma from '../../../data/prisma'
import styles from '../../Admin.module.scss'

async function CreateEventPage() {
    const data = await prisma.event.findMany()
    return (
        <div className={styles.container}>
            <CrearEvento data={data} />
        </div>
    )
}

export default CreateEventPage