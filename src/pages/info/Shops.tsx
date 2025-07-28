import classes from "./Shops.module.css"

import ShopFiller from "./ShopFiller"

const Shops = () => {
    const myLocation: [number, number] = [41.77669417841965, 44.806636812657594];


    return <div className={classes.container}>
        <div className={classes.shop1}>
            <ShopFiller location="Anapis 414" mapLocation={myLocation} title="Our Shop on Temqa"/>
        </div>
        <div className={classes.filler}></div>
        <div className={classes.shop2}>
            <ShopFiller location="Saburtaloooo" mapLocation={myLocation} title="Our Shop on Saburtalo"/>
        </div>
    </div>
}

export default Shops