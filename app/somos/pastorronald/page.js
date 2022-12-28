
import Suggestions from '../../components/Suggestions'
import { MyImage } from '../../variables'
import styles from './Ronald.module.scss'
import { biography } from './ronaldContent'

export default function Page() {
    return (
        <div className={styles.ronaldContainer}>
            <h1>Biografia</h1>
            <div className={styles.hero + " flex"}>
                <div className={styles.heroContent + " flex-center"}>
                    <div className={styles.heroImage}>
                        {MyImage(biography.imageUrl1)}
                    </div>
                    <div className={styles.textContent}>
                        <h1>Pastor Ronald Vides</h1>
                        <p>Pastor Fundador de Ministerios Betesda</p>
                    </div>
                    <div className="social-links">
                        {/* <SocialLinks></SocialLinks> */}
                    </div>
                </div>
            </div>
            {biography.description}
            <Suggestions />
        </div>
    )
}

