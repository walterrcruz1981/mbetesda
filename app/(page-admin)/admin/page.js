
import Link from 'next/link'
import React from 'react'
import styles from './../Admin.module.scss'
import { MyImage } from '../../variables'

function Admin() {
    const heroImageUrl = 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'

    return (
        <div className={styles.restrictedContainer + ' flex-center-column'}>
            <Link href={'/admin/crearevento'}>Manejar Evento </Link>
            <Link href={'/admin/crearslide'}>Manejar Slide </Link>
            <Link href={'/api/auth/signout'}>Log Out </Link>
            {MyImage(heroImageUrl)}
        </div>
    )
}

export default Admin