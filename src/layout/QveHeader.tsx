import classes from "./QveHeader.module.css"
import { Link } from "react-router-dom"

const QveHeader = () => {
    return <div className={classes.container}>
        <div className={classes.miniCont}>
            <span className={`${classes.item} ${classes.item1}`}>Items With Sale</span>
            <span className={classes.item}>Second Hand</span>
            <span className={classes.item}>Our Program</span>
            <span className={classes.item}>chunchurikebi</span>
        </div>
        <div className={classes.miniCont}>
            <span className={`${classes.item} ${classes.item1}`}><Link to="/help">Help</Link></span>
            <span className={classes.item}><Link to="/contact">Contact</Link></span>
        </div>
    </div>
}

export default QveHeader