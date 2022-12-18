
import { MyImage } from '../variables'
import Estrategia from './Estrategia'
import Gigantes from './Gigantes'
import Plan from './Plan'
import { cincoGigantes, estrategia, plan } from './peaceContent'
import styles from './Peace.module.scss'
import Suggestions from '../components/Suggestions'

function PlanPeace() {
    return (
        <div className={styles.peaceContainer}>
            <div className={styles.banner}>
                {MyImage(cincoGigantes.bannerImage)}
            </div>
            <div className={styles.buttonContainer + " flex-center"}>
                <a href='#cinco-gigantes'>5 gigantes</a>
                <a href='#estrategia'>Estrategia</a>
                <a href='#plan'>Plan</a>
            </div>
            <div className="gigantes" id="cinco-gigantes">
                <Gigantes content2={cincoGigantes} content={cincoGigantes.losCincoGigantes} />
            </div>
            <div id="estrategia">
                <Estrategia content2={estrategia} content={estrategia.pasosEstrategia} />
            </div>
            <div id="plan">
                <Plan content2={plan} content={plan.inplementacion} />
            </div>
            <Suggestions />
        </div>
    )
}

export default PlanPeace