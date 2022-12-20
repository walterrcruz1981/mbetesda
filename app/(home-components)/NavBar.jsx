import React from 'react'
import styles from '../Home.module.scss'
import { MyImage } from '../variables'
import logo from '../../public/images/logo/logo.png'
import Links from './Links'
import Link from 'next/link'

function NavBar() {
    return (
        <div className={styles.navbarContainer + ' flex'}>
            <div className={styles.logo}>
                <Link href={'/'}>{MyImage(logo)}</Link>
            </div>
            <Links />
        </div>
    )
}

export default NavBar