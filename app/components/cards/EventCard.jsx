import Link from 'next/link'
import { MyImage } from '../../variables'
import styles from '../Component.module.scss'

function EventCard({ content }) {
    const defaultImage = 'https://images.unsplash.com/photo-1529973625058-a665431328fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'

    return (
        <Link href={`/eventos/${content.id}`}>
            <div className={styles.eventCard + ' flex-center-column'}>

                <div className={styles.imageContainer}>
                    {MyImage(content.imageUrl || defaultImage)}
                </div>
                <div className={styles.title}>{content.title}</div>

                <p className={styles.description}>{content.location}</p>
            </div>
        </Link>
    )
}

export default EventCard