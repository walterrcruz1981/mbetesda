import React from 'react'
import styles from './homeComponents.module.scss'
import Image from 'next/image'
import { MyImage } from '../variables'
import logo from '../../public/images/logo/logo.png'
import Links from './Links'
import Link from 'next/link'
import liveImage from '../../public/images/assets/live.png'

async function NavBar() {
    return (
        <div className={styles.navbarContainer + ' flex'}>

            <Link className={styles.logo} href={'/'}>{MyImage(logo)}</Link>

            <div className={styles.liveWidget}>
                <Link href={'/sermones'}><Image className={styles.liveBug} src={liveImage} width={75} height={55} alt='lives' /></Link>
            </div>
            <div className={styles.linksContainer}>
                <Links />
            </div>
        </div>
    )
}

export default NavBar