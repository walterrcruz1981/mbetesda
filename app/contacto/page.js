import React from 'react'
import { MyImage } from '../variables'
import ContactInfo from './ContactInfo'
import styles from './Contacto.module.scss'
import { iglesiasInfo } from '../iglesia/iglesiasContent'
import WhatsUpBug from '../components/features/WhatsUpBug'
import Suggestions from '../components/Suggestions'

function Contacto() {
    const heroImage = 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    return (
        <div className={styles.contactoContainer}>
            <div className={styles.hero}>
                {MyImage(heroImage)}
                <h1 className={styles.heroText}>Contacto</h1>
            </div>
            {iglesiasInfo?.map((iglesia, index) => (
                <ContactInfo key={index} content={iglesia} />
            ))}
            <WhatsUpBug url={iglesiasInfo[0].whatsupUrl} />
            <Suggestions />
        </div>
    )
}

export default Contacto