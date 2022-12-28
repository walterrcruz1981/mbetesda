'use client'
import React, { useState } from 'react'
import Modal from '../components/Modal'
import styles from './Somos.module.scss'
import { propositos, propositosUnicos, valores, declaracion } from './somosContent'
import ManyInfoTab from '../components/tabs/ManyInfoTab'
import { MyImage } from '../variables'

function Somos() {
    const bgVideo = 'https://dih6tqxrn8ffv.cloudfront.net/Bienvenidos a casa.mov'
    const videoInfo = {
        videoUrl: 'Bienvenidos a casa.mov',
        posterImage: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80'
    }
    const [selected, setSelected] = useState(0)
    const [openModal, setOpenModal] = useState(false)
    const [multiTab, setMultiTab] = useState(0)
    const choiceButtons = [
        { title: 'Proposito', id: 0 },
        { title: 'Valores', id: 1 },
        { title: 'Declaracion', id: 2 }
    ]
    return (
        <div className={styles.somosContainer}>
            <div className={styles.videoContainer}>
                <iframe src="https://www.youtube.com/embed/RNpSGefqTE0?controls=0&autoplay=1&mute=1&playsinline=1&playlist=RNpSGefqTE0&loop=1" title="YouTube video player" allowFullScreen></iframe>
            </div>
            <div className={styles.hero + ' flex-center-column'}>
                <h1>Bienvenido<br></br><span>A Ministerios Betesda</span></h1>
                <button onClick={() => setOpenModal(true)}>play video</button>
            </div>
            <Modal videoInfo={videoInfo} open={openModal} closeModal={() => setOpenModal(false)} />
            <div className={styles.fancyAccordion + " flex-center-column"}>
                <h1 className="header">Somos Iglesia Con Proposito</h1>
                <div className={styles.container + " flex-center"}>
                    <div className={styles.buttons}>
                        {propositos?.map((item, index) => (
                            <div key={index} onClick={() => {
                                setSelected(index)
                            }} className={index !== selected ? styles.button : styles.buttonReveal + ' ' + styles.button} href="">{item.title}</div>
                        ))}
                    </div>
                    {propositos?.map((item, index) => (
                        <div key={index} className={styles.textContent}>
                            {selected === index ? MyImage(item.imageUrl) : null}
                            <h1>{selected === index ? item.title : null}</h1>
                            <p>{selected === index ? item.description : null} </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.buttonContainer + " flex-center"}>
                {choiceButtons.map(button => {
                    return <button key={button.id} className={multiTab === button.id ? styles.activeTab : ''} onClick={() => setMultiTab(button.id)}>{button.title}</button>
                })}
            </div>
            {
                multiTab === 0 ? <ManyInfoTab tabContent={propositosUnicos}></ManyInfoTab> : null
                    || multiTab === 1 ? <ManyInfoTab tabContent={valores}></ManyInfoTab> : null
                        || multiTab === 2 ? <ManyInfoTab tabContent={declaracion}></ManyInfoTab> : null
            }
        </div>
    )
}

export default Somos