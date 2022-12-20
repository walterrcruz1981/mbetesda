
import styles from './Home.module.scss'
import HomeSlideShow from './(home-components)/HomeSlideShow'
import LinkCard from './components/cards/LinkCard'
import { infoCardsContent, connectionCard } from './homeContent'
import prisma from './data/prisma'

const getData = async () => {
    const data = await prisma.HomeSlideShow.findMany({
        select: {
            id: true,
            buttonText: true,
            buttonLink: true,
            imageUrl: true
        }

    })
    return data
};


export default async function Home() {
    const data = await getData()
    return (
        <div className={styles.homeContainer}>
            <HomeSlideShow content={data} />
            <div className={styles.connectionContainer + " responsive-grid-large"}>
                {connectionCard?.map((card, index) => (<LinkCard key={index} content={card} />))}
            </div>
            <div className={styles.infoContainer + " responsive-grid-large"}>
                {infoCardsContent?.map((card, index) => (<LinkCard key={index} content={card} />))}
            </div>
        </div>
    )
}

