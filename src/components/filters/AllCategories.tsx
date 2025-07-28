import classes from "./AllCategories.module.css"

const DUMMY_BIG = ["shirts", "pants", "socks", "heels", "dresses", "shorts", "shoes", ]
const DUMMY_SMALL = [
    {shirts: ["for men", "for woman"]}
]

const AllCategories = () =>{
    return <div className={classes.container}>
        <div className={classes.bigCategories}>
            <h2>Categories</h2>
            {DUMMY_BIG.map(item => <p>{item}</p>)}
        </div>
        <div className={classes.smallCategories}>

        </div>
    </div>
}

export default AllCategories