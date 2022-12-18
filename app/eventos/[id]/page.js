import Link from "next/link"
import { MyImage } from "../../variables"
import styles from '../Eventos.module.scss'
import prisma from '../../data/prisma'

async function EventDescription({ params }) {
    const eventId = params.id;
    const detailData = await prisma.event.findUnique({
        where: {
            id: eventId
        }
    });

    return (
        <div className={styles.eventDescription}>
            <div className={styles.hero}>
                {MyImage()}
                <div className={styles.heroContent}>
                    <h1>{detailData.title}</h1>
                </div>
            </div>
            <div className={styles.descriptionContainer + ' flex'}>
                <div className={styles.info}>
                    <h3>Cuando: <br></br><span>{detailData.date}</span></h3>
                    <h3>Donde: <br></br><span>{detailData.location}</span><br></br><span>En el  {detailData.venue}</span></h3>
                    <div className={styles.addToCalendarButton + ' flex-center'}>+ A Mi Calendario</div>
                </div>
                <hr />
                <div className={styles.description}>
                    <div className={styles.imageContainer}>
                        {MyImage(detailData.imageUrl)}
                    </div>
                    <p>{detailData.description}</p>
                </div>

            </div>
            <Link href={'/eventos'}>Todos los Eventos</Link>
        </div>
    )
}

export default EventDescription