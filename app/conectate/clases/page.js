import React from 'react'
import styles from './Clases.module.scss'
import Tab from '../../components/tabs/Tab'
import { classInfo, introText } from './classContent'
import { MyImage } from '../../variables'
import Suggestions from '../../components/Suggestions'
import desImage from '../../../public/images/assets/02.png'

function Clases() {

    const headerImage = 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    return (
        <div className={styles.clasesContainer}>
            <div className={styles.title}>
                <h1>Clases de desarrollo</h1>
            </div>
            <div className={styles.headerImage}>
                {MyImage(headerImage)}
            </div>
            <div className={styles.proposito + ' flex-center'}>
                <div className={styles.image}>
                    {MyImage(desImage)}
                </div>
                <div className={styles.textContent}>
                    <h1>{introText.title}</h1>
                    <p className={styles.description}>{introText.description}</p>
                </div>
            </div>
            <Tab content={classInfo} />
            <Suggestions />
        </div>
    )
}

export default Clases