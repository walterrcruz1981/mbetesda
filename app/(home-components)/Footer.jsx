import React from 'react'
import styles from './homeComponents.module.scss'
import logo from '../../public/images/logo/logo2.png'
import { MyImage } from '../variables'
import Links from './Links'

function Footer() {
    return (
        <div className={styles.footerContainer + ' flex-center-column'}>
            <div className={styles.logo}>
                {MyImage(logo)}
            </div>
            <Links />
        </div>
    )
}

export default Footer