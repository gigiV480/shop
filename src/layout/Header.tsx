import { Link } from "react-router-dom"
import classes from "./Header.module.css"

const Header = () =>{
    return <div className={classes.headerContainer}>
        <div style={{paddingLeft: "1rem"}}>
            <Link to="/">Shop</Link>
        </div>
        <div className={classes.middleSide}>
            <Link to="/about">About</Link>
            <Link to="/productsPage">test</Link>
            <Link to="/profile">profile</Link>
        </div>
        <div className={classes.rightSection}>
            <Link to="/favorites">♡</Link>
            <Link to="/cart">🛒</Link>
            <Link to="/auth">
                <button className={classes.button}>Log In</button>
            </Link>
        </div>
    </div>
}

export default Header