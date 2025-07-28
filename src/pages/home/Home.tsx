import classes from "./Home.module.css"
import Categories from "./homeLayout/Categories"
import Search from "./homeLayout/Search"
import Popular from "./homeLayout/Popular"
import NewlyAdded from "./homeLayout/NewlyAdded"
import ShopLocation from "./homeLayout/ShopLocation"
import SecondHand from "./homeLayout/SecondHand"
import PopularBrands from "./homeLayout/PopularBrands"

const Home = ()=>{
    return <div className={classes.homePage}>
    <div className={classes.section}><Search /></div>
    <div className={classes.section}><Categories /></div>
    <div className={classes.sectionNew}><Popular /></div>
    <div className={classes.section}><PopularBrands /></div>
    <div className={classes.section}><ShopLocation/></div>
    <div className={classes.section}><NewlyAdded /></div>
    <div className={classes.sectionNew}><SecondHand/></div>
  </div>
  
  
}

export default Home