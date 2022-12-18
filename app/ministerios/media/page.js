
import { Media as content } from '../ministeriosContent'
import styles from './Media.module.scss'
import { MyImage } from '../../variables';
import Suggestions from '../../components/Suggestions';

function Media() {
    const domain = 'https://dih6tqxrn8ffv.cloudfront.net/'
    const video = 'mediaVideo.mp4'
    const heroImage = 'https://images.unsplash.com/photo-1612043071344-94c20c4c837e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80';
    return (
        <div className={styles.mediaContainer + ' flex-center-column'}>
            <div className={styles.bgImage + " flex-center-column"}>
                {MyImage(heroImage)}
            </div>
            <div className={styles.heroText}>
                <h1>{content.title}</h1>
                <p>{content.intro}</p>
            </div>
            <div className={styles.cardsContainer + " responsive-grid"}>
                <div className={styles.duties + ' flex-center-column'}>
                    <h1>{content.mision.title}</h1>
                    <p>{content.mision.description}</p>
                </div>
                <div className={styles.duties + ' flex-center-column'}>
                    <h1>{content.vision.title}</h1>
                    <p>{content.vision.description}</p>
                </div>
            </div>
            <div className={styles.videoContainer}>
                <h1>¿Que Hacemos?</h1>
                <video autoPlay muted src={domain + video}></video>
            </div>
            <div className="responsive-grid">
                {content.duties?.map((duty, index) => (
                    <div className={styles.duties + ' flex-center box-shadow'} key={index}>
                        <h2>{duty.title}</h2>
                        {MyImage(domain + duty.image)}
                    </div>
                ))}
            </div>
            <Suggestions />
        </div>
    )
}

export default Media