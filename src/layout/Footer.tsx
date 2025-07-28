import { Link } from "react-router-dom"
import classes from "./Footer.module.css"

const Footer = () =>{

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return <div className={classes.footerCont}>
        <div className={`${classes.navigation} ${classes.item}` }>
            <h2>Navigation</h2>
            <p><Link to="/productsPage" onClick={scrollToTop}>Buy Online</Link></p>
            <p><Link to="/shops" onClick={scrollToTop}>Our Shops</Link></p>
            <p>SecondHand Items</p>
        </div>
        <div className={classes.help}>
            <h2>Help</h2>
            <p>Often Asked Qustions</p>
            <p>Text</p>
            <p>(032) 420 69 69</p>
            <p>info@gizashop.ge</p>
            <div style={{display: "flex", justifyContent: "space-around"}}>
                <p>fb</p>
                <p>insta</p>
            </div>
        </div>
        <div className={classes.contact}>
            <h2>Contact</h2>
            <p>contact</p>
            <p>contact</p>
            <p>contact</p>
            <p>contact</p>
        </div>
    </div>
}

export default Footer