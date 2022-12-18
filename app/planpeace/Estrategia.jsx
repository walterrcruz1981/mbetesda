'use client'
import { useState } from 'react'
import styles from './Peace.module.scss'

function Estrategia({ content, content2 }) {
    const [selected, setSelected] = useState(0)
    function handleAccordion(id) {
        if (selected === id) {
            return setSelected(null)
        }
        setSelected(id)
    }
    return (
        <div className={styles.estrategiaContainer}>
            <h1 className={styles.header + ' flex-center'}>Estrategia</h1>
            <p className={styles.intro}>{content2.estrategiaText1}</p>
            <div className={styles.infoContainer + " flex-center"}>
                <div className={styles.accordionContainer}>
                    {content.map((item, id) => {
                        return (
                            <div onClick={() => handleAccordion(id)} key={id} className={styles.eachAccordion + ' flex'}>
                                <div className={styles.title + " flex"}>
                                    {item.title}
                                    <span>{selected === id ? '-' : '+'}</span>
                                </div>
                                <p className={selected === id ? styles.description + ' ' + styles.active : styles.description}>
                                    {item.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.descriptionText}>
                    {content2.estrategiaText2}
                </div>
            </div>
        </div>
    )
}

export default Estrategia