'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from "swiper";
import styles from './homeComponents.module.scss'
import { MyImage } from '../variables'
import "swiper/css";
import "swiper/css/pagination";
import Link from 'next/link';
import { useState, useEffect } from 'react';

function HomeSlideShow({ slideContent, liveFeedContent }) {
    console.log(liveFeedContent.pageInfo.totalResults);

    const [isLive, setIsLive] = useState(false)
    const [videoId, setVideoId] = useState([])

    function checkLiveStatus(check) {
        if (check.pageInfo.totalResults !== 0) setIsLive(true)
        else return
        const { id } = check.items[0]
        setVideoId(id.videoId)
    }

    useEffect(() => {
        checkLiveStatus(liveFeedContent)
    }, [])
    const liveLink = `https://www.youtube.com/embed/${videoId}?controls=0&autoplay=1&mute=1&playsinline=1&playlist=${videoId}&loop=1`
    return (
        <div className={styles.slideShow}>
            <Swiper
                pagination={true}
                modules={[Pagination]}
                className="mySwiper"
            > {!isLive ? null :
                <SwiperSlide className={styles.slide}>
                    <Link href={'/sermones/' + videoId}><button className={styles.slideButton}>Estamos En Vivo</button></Link>
                    <div className={styles.videoWrapper}>
                        <iframe src={liveLink} title="YouTube video player" allowFullScreen></iframe>
                    </div>
                </SwiperSlide>
                }

                {slideContent?.map(slide => (
                    <SwiperSlide key={slide.id} className={styles.slide}>
                        {MyImage(slide.imageUrl)}
                        <button className={styles.slideButton}><Link href={slide.buttonLink}>{slide.buttonText}</Link></button>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
export default HomeSlideShow