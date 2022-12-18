import React from 'react'
import { MyImage } from '../variables'
import styles from './Peace.module.scss'

function Plan({ content, content2 }) {
    const layout1 = styles.card + ' ' + ' flex-center'
    const layout2 = styles.card + ' flex-center flex-reverse'
    return (
        <div className={styles.planContainer}>
            <h1 className={styles.header + ' flex-center'}>Plan</h1>
            <h3 className='flex-center primary-color'>{content2.title}</h3>
            <div className={styles.introText + ' responsive-grid'}>
                <p className='flex-center-column'>{content2.planIntro1}</p>
                <p className='flex-center-column'>{content2.planIntro2}</p>
            </div>
            <h1 className='flex-center primary-color'>Se Implementa de la siguiente forma:</h1>
            <div className={styles.cardsContainer}>
                {content?.map((item, id) => (
                    <div key={id} className={id !== 1 && id !== 3 ? layout1 : layout2}>
                        <div className={styles.imageContainer}>
                            {MyImage(item.imageUrl)}
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            {item.description}
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default Plan