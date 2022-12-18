
import styles from './Eventos.module.scss'
import { MyImage } from '../variables'
import prisma from '../data/prisma';
import EventCard from '../components/cards/EventCard'

async function EventosPage() {

    const data = await prisma.event.findMany();

    return (
        <div className={styles.eventosContainer}>
            <div className={styles.hero}>
                {MyImage()}
                <div className={styles.heroContent}>
                    <h1>Eventos</h1>
                </div>
            </div>

            <div className="responsive-grid-large">
                {data?.map(event => (<EventCard key={event.id} content={event} />))}
            </div>
        </div>
    )
}

export default EventosPage