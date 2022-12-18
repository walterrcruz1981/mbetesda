import React from 'react'
import styles from './Contacto.module.scss'
import Link from 'next/link'

function ContactInfo({ content }) {
    return (
        <div className={styles.contactContainer + " flex box-shadow"}>
            <div className={styles.mapa}>
                <iframe height='500px' width='100%' src={content.iframeSrc} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className={styles.contactTextContent + " flex-column"}>
                <h1>{content.nombreDeMision}</h1>
                <h3>Pastor: {content.nombrePastor}</h3>
                <p><b>Servicio: </b>{content.servicios}</p>
                <p><b>Direccion: </b>{content.direccion}</p>
                <p><b>tel: </b>{content.cellPhone}</p>
                <p><b>Whatsapp: </b>{content.whatsup}</p>
                <p><b>Email: </b><Link href={`mailto:${content.email}`}>{content.email}</Link></p>
                <p><b>Web: </b><Link href={content.websiteUrl}>Visitar Pagina</Link></p>
                {/* <SocialLinks /> */}
            </div>
        </div>
    )
}

export default ContactInfo