import classes from "./ShopLocation.module.css"
import MapWithOptions from "../../../components/MapWithFullScreen";

const ShopLocation = () =>{
    const myLocation: [number, number] = [41.77669417841965, 44.806636812657594];

    return <div className={classes.sellCont}>
        <div className={classes.text}>
            <h3>Want to come and look at products?</h3>
            <p>Come to our shop</p>
        </div>
        <div className={classes.map}>
            <MapWithOptions location={myLocation} />
        </div>
    </div>
}

export default ShopLocation