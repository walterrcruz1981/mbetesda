'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from "swiper";
import styles from '../Home.module.scss'
import { MyImage } from '../variables'
import "swiper/css";
import "swiper/css/pagination";
import Link from 'next/link';


function HomeSlideShow({ content }) {

    return (
        <div className={styles.slideShow}>
            <Swiper
                pagination={true}
                modules={[Pagination]}
                className="mySwiper"
            >
                {content?.map(slide => (
                    <SwiperSlide key={slide.id} className={styles.slide}>
                        {MyImage(slide.imageUrl)}
                        <button className={styles.slideButton}><Link href={slide.buttonLink}>{slide.buttonText}</Link></button>
                    </SwiperSlide>
                ))}
                <SwiperSlide className={styles.slide}>
                    <div className={styles.videoContent + ' flex'}>
                        <Link href={'/planpeace'}><button>Plan Peace</button></Link>
                    </div>
                    <div className={styles.iframeCont}>
                        <iframe src="https://www.youtube.com/embed/RNpSGefqTE0?controls=0&autoplay=1&mute=1&playsinline=1&playlist=RNpSGefqTE0&loop=1" title="YouTube video player" allowFullScreen></iframe>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default HomeSlideShow