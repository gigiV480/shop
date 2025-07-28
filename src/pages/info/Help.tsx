import { Link } from "react-router-dom"
import classes from "./Help.module.css"

const Help = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return <div className={classes.container}>
        <div className={classes.search}>
            <h1>Often Asked Questions</h1>
            <input className={classes.input} placeholder="For Example: how do I register"/>
        </div>
        <div className={classes.questions}>
            <h1>Relatable xuinia</h1>
            <div className={classes.boxes}>
                <div className={classes.box}>Registration</div>
                <div className={classes.box}>How to buy online</div>
                <div className={classes.box}>Refill Balance</div>
                <div className={classes.box}>Courier blabla</div>
                <div className={classes.box}>d</div>
                <div className={classes.box}>d</div>
            </div>
        </div>
        <div className={classes.contact}>
            <h1>Still Need Help?</h1>
            <Link to="/contact" onClick={scrollToTop}><button className={classes.button}>Contact Us</button></Link>
            <h2>Or call us (032) 420 69 69 monday-friday 09:00-18:00</h2>
        </div>
    </div>
}

export default Help