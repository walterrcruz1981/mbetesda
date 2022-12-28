
import styles from '../Sermones.module.scss'

function SermonDescriptionLayout({ children }) {
    return (
        <div className={styles.descriptionLayout}>
            {children}
        </div>
    )
}

export default SermonDescriptionLayout