import { Link } from "react-router-dom";
import classes from "./Categories.module.css";

import Modal from "../../../UI/Modal";
import AllCategories from "../../../components/filters/AllCategories";

import { useState } from "react";

import shirt from "./icons/shirt.png";
import pants from "./icons/pants.png";
import bags from "./icons/bags.png";
import sweaters from "./icons/sweaters.png";
import slippers from "./icons/slippers.png";
import heels from "./icons/heels.png";
import tankTops from "./icons/tankTops.png";
import dress from "./icons/dress.png";

// List of categories and corresponding images
const categoryData = [
  { name: "shirts", image: shirt },
  { name: "pants", image: pants },
  { name: "bags", image: bags },
  { name: "sweaters", image: sweaters },
  { name: "slippers", image: slippers },
  { name: "heels", image: heels },
  { name: "tankTops", image: tankTops },
  { name: "dresses", image: dress },
];

const Categories = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  return (
    <div className={classes.categoryCont}>
      {/* <Link to="/productsPage" className={classes.imageText}> */}
      <div className={classes.imageText}>
        <img
          src="https://img.freepik.com/premium-vector/www-vector-icon-design-illustration_1174953-28452.jpg"
          alt="All Categories"
          className={classes.image}
          onClick={()=> setModalOpen(true)}
        />
      {/* </Link> */}
      </div>
      <Modal isOpen={isModalOpen} onClose={()=> setModalOpen(false)}>
        <AllCategories/>
      </Modal>

      {categoryData.map((item) => (
        <Link
          key={item.name}
          to={`/productsPage?category=${item.name}`}
          className={classes.imageText}
        >
          <img src={item.image} alt={item.name} className={classes.image} />
        </Link>
      ))}
    </div>
  );
};

export default Categories;
