'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from "swiper";
import styles from './homeComponents.module.scss'
import { MyImage } from '../variables'
import "swiper/css";
import "swiper/css/pagination";
import Link from 'next/link';

function HomeSlideShow({ slideContent, liveFeedContent }) {

    return (
        <div className={styles.slideShow}>
            <Swiper
                pagination={true}
                modules={[Pagination]}
                className="mySwiper"
            >
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