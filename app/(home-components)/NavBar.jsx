import React from 'react'
import styles from './homeComponents.module.scss'
import { MyImage } from '../variables'
import logo from '../../public/images/logo/logo.png'
import Links from './Links'
import Link from 'next/link'

async function NavBar() {
    return (
        <div className={styles.navbarContainer + ' flex'}>

            <Link className={styles.logo} href={'/'}>{MyImage(logo)}</Link>
            <div className={styles.linksContainer}>
                <Links />
            </div>
        </div>
    )
}

export default NavBar