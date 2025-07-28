import { useState } from "react";
import classes from "./Profile.module.css";

import YourProfile from "./smallComps/YourProfile";
import YourOrders from "./smallComps/YourOrders";
import CreditBalance from "./smallComps/CreditBalance";
import PaymentMethods from "./smallComps/PaymentMethods";
import Addresses from "./smallComps/Addresses";
import AccountSecurity from "./smallComps/AccountSecurity";

const items = [
  "Your Profile",
  "Your Orders",
  "Credit Balance",
  "Payment Methods",
  "Addresses",
  "Account Security",
];

const Profile = () => {
  const [active, setActive] = useState("Your Profile");


  const renderContent = () => {
    switch (active) {
      case "Your Profile":
        return <YourProfile />;
      case "Your Orders":
        return <YourOrders />;
      case "Credit Balance":
        return <CreditBalance />;
      case "Payment Methods":
        return <PaymentMethods />;
      case "Addresses":
        return <Addresses />;
      case "Account Security":
        return <AccountSecurity />;
      default:
        return <div>Select an option</div>;
    }
  };

  return (
    <div className={classes.container}>
      <h1>Profile</h1>
      <div className={classes.distance}>
        <div className={classes.linkList}>
          {items.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`${classes.listItem} ${
                active === item ? classes.active : ""
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className={classes.meh}></div>
        <div className={classes.showList}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Profile;
