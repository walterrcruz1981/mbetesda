
import React from 'react'
import styles from '../Sermones.module.scss'
import { MyImage } from '../../variables'
import Link from 'next/link'

function NextSteps() {
    const churchImage = 'https://images.unsplash.com/photo-1491396023581-4344e51fec5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
    const gruposImage = 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80v'
    const contactoImage = 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    return (
        <div className={styles.nextStepsContainer + ' flex-column'}>
            <h2>Siguientes pasos de fe</h2>
            <div className={styles.cardsContainer + ' responsive-grid-small'}>
                <Link href={'/iglesia'}>
                    <div className={styles.detailCard + ' flex-column-end'}>
                        {MyImage(churchImage)}
                        <h3>Encuentra una Iglesia</h3>
                    </div>
                </Link>
                <Link href={'/conectate/grupos'}>
                    <div className={styles.detailCard + ' flex-column-end'}>
                        {MyImage(gruposImage)}
                        <h3>Encuentra un Grupo Pequeño</h3>
                    </div>
                </Link>
                <Link href={'/contacto'}>
                    <div className={styles.detailCard + ' flex-column-end'}>
                        {MyImage(contactoImage)}
                        <h3>Contactanos</h3>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default NextSteps