import styles from './Component.module.scss'
const domain = 'https://dih6tqxrn8ffv.cloudfront.net/'

const Modal = ({ open, closeModal, videoInfo }) => {
    if (!open) return null
    return (
        <div onClick={closeModal} className={styles.modalContainer + ' flex-center'}>
            <div onClick={(e) => { e.stopPropagation() }} className={styles.modalContent}>
                <div onClick={closeModal} className={styles.close}>X</div>
                <video autoPlay poster={videoInfo.posterImage} src={domain + videoInfo.videoUrl}>
                </video>
            </div>
        </div>
    )
}
export default Modal