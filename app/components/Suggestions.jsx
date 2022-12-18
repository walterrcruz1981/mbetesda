
import styles from './Component.module.scss'
import Link from 'next/link'

function Suggestions() {
    return (
        <div className={styles.suggestionsContainer + ' flex-center-column'}>
            <h3>Sugerencias</h3>
            <div className={styles.links + ' responsive-grid'}>
                <Link href={'/ministerios/media'}>Media</Link>
                <Link href={'/somos/pastorronald'}>Pastor Ronald</Link>
                <Link href={'/conectate/clases'}>Clases</Link>
                <Link href={'/conectate/grupos'}>Grupos Pequeños</Link>
                <Link href={'/planpeace'}>Plan Peace</Link>
                <Link href={'/contacto'}>Contacto</Link>
            </div>
        </div>
    )
}

export default Suggestions