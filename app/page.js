
import styles from './Home.module.scss'
import HomeSlideShow from './(home-components)/HomeSlideShow'
import LinkCard from './components/cards/LinkCard'
import { infoCardsContent, connectionCard } from './homeContent'
import prisma from './data/prisma'

const getSlideShowData = async () => {
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

const getLiveYouTube = async () => {
    const fetchData = await fetch('http://localhost:3000/api/youtubelive', { cache: 'no-store' })

    return fetchData.json()
}


export default async function Home() {
    const slideShowData = await getSlideShowData()
    const liveFeed = await getLiveYouTube()
    return (
        <div className={styles.homeContainer}>
            <HomeSlideShow slideContent={slideShowData} liveFeedContent={liveFeed} />
            <div className={styles.connectionContainer + " responsive-grid-large"}>
                {connectionCard?.map((card, index) => (<LinkCard key={index} content={card} />))}
            </div>
            <div className={styles.infoContainer + " responsive-grid-large"}>
                {infoCardsContent?.map((card, index) => (<LinkCard key={index} content={card} />))}
            </div>
        </div>
    )
}

