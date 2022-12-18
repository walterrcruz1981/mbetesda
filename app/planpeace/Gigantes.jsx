'use client'
import React, { useState } from 'react'
import { MyImage } from '../variables'
import styles from './Peace.module.scss'

function Gigantes({ content, content2 }) {
    const [activeTab, setActiveTab] = useState(0)
    return (
        <div className={styles.gigantesContainer}>
            <div className={styles.linksContainer + ' flex-center'}>
                <div className={styles.description}>
                    {content?.map((item, id) => {
                        return (
                            activeTab === id ? <div key={id}>
                                <div className={styles.image}>
                                    {MyImage(item.imageUrl)}
                                </div>
                                <p>{item.description}</p></div> : null
                        )
                    })}
                </div>

                <div className={styles.links}>
                    {content?.map((item, id) => {
                        return (
                            <h4 onClick={() => setActiveTab(id)} key={id} className={activeTab === id ? styles.activeTitle : styles.title}>{item.title}</h4>
                        )
                    })}
                </div>
            </div>
            <div className={styles.bottomContainer + " flex-center"}>
                <div className={styles.textContent}>
                    <p>{content2.gigantesText2}</p>
                    <p>{content2.gigantesText3}</p>
                </div>
            </div>
        </div>
    )
}

export default Gigantes