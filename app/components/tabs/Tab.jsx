'use client'
import React, { useState } from 'react'
import styles from '../Component.module.scss'

function Tab({ content }) {
    const [active, setActive] = useState(0)
    return (
        <div className={styles.tabContainer}>
            <div className={styles.choices + " flex-center"}>
                {content?.map((title, index) => (
                    <h3 onClick={() => setActive(index)} key={index} className={index === active ? styles.active + ' flex-center' : ''}>{title.title}</h3>
                ))}
            </div>
            <div className={styles.description + " flex-center-column"}>
                {content?.map((description, index) => (
                    <div key={index}>{index === active ? description.description : ''}</div>
                ))}
            </div>
        </div >
    )
}

export default Tab