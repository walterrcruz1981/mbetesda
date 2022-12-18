import React, { useState } from 'react'
import styles from '../Component.module.scss'

function ManyInfoTab({ tabContent }) {
    const [activeValor, setActiveValor] = useState(0)
    return (
        <div className={styles.infotabContainer + ' flex'}>
            <h1 className='primary-color flex-center'>{tabContent.title}</h1>
            <div className={styles.titleContainer + ' flex-center'}>
                {tabContent.map((title, id) => {
                    return <div onClick={() => setActiveValor(id)} key={id} className={id === activeValor ? styles.activeValor : styles.title}>{title.title} </div>
                })}
            </div>
            <div className={styles.description + " flex-center"}>
                {tabContent.map((description, id) => {
                    return id === activeValor ? <div key={id}>{description.description}</div> : null
                })}
            </div>
        </div>
    )
}

export default ManyInfoTab