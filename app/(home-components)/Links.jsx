import Link from 'next/link'
import React from 'react'
import styles from './homeComponents.module.scss'
function Links() {
    return (
        <div className={styles.links}>
            <ul>
                <Link href={'/'}>Home</Link>
                <Link href={'/somos'}>Somos</Link>
                <Link href={'/sermones'}>Sermones</Link>
                <Link href={'/planpeace'}>Plan Peace</Link>
                <Link href={'/contacto'}>Contacto</Link>
            </ul>
        </div>
    )
}

export default Links