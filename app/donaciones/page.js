'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import styles from './Donar.module.scss'
import { MyImage } from '../variables'

function Donaciones() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://app.breezechms.com/js/give.js";
        document.body.appendChild(script);
    }, [])
    return (
        <div className={styles.donacionesContainer}>
            {MyImage()}
            <div className={styles.heroSection + ' flex-center'}>
                <div className={styles.textContent}>
                    <h3 className='text-shadow'>Vea lo que Dios puede hacer a través de su generosidad.</h3>
                    <p className='text-shadow'>Sencillo y seguro. Dé un solo regalo o programe donaciones recurrentes usando su cuenta corriente, tarjeta de débito o crédito.</p>
                </div>
            </div>
            <div className={styles.giveContainer + ' box-shadow'} id="breeze_giving_embed" data-subdomain="betesda" data-width="100%"
                data-background_color="f0ffff" data-text_color="000"
                data-donate_button_background_color="6495ED"
                data-donate_button_text_color="f0ffff" data-fund_id=""
                data-frequency="" data-amount="">
            </div>
            <a href="https://betesda.breezechms.com/give/online" target="_blank" rel="noopener noreferrer"></a>

        </div>
    )
}

export default Donaciones