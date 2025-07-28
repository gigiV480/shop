import classes from "./Auth.module.css"
import VerticalAutoScroll from "./AutoScrollUp";
import VerticalAutoScrollDown from "./AutoScrollDown";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

import { Link } from "react-router-dom";
import { useState } from "react";

const Auth = () =>{
    const [isLogin, setLogin] = useState(true)

    const images = [
        'https://img.freepik.com/premium-vector/www-vector-icon-design-illustration_1174953-23456.jpg?ga=GA1.1.37993709.1736340019&semt=ais_hybrid&w=740',
        'https://img.freepik.com/premium-photo/close-up-text-with-symbol_1048944-21197926.jpg?ga=GA1.1.37993709.1736340019&semt=ais_hybrid&w=740',
        'https://img.freepik.com/free-psd/3d-rendering-interface-icon_23-2151553990.jpg?ga=GA1.1.37993709.1736340019&semt=ais_hybrid&w=740',
        'https://img.freepik.com/premium-psd/email-signature-mockup-template-office-brand_308376-410.jpg?ga=GA1.1.37993709.1736340019&semt=ais_hybrid&w=740',
        'https://img.freepik.com/free-vector/space-login-landing-page-template_23-2148260289.jpg?ga=GA1.1.37993709.1736340019&semt=ais_hybrid&w=740',
      ];

    const change = () => {
        setLogin(tt => !tt)
    }

    return  <div className={classes.loginContainer}>
            <div></div>
            <div className={classes.content}>
            <div className={classes.language}>
                <h2>GIZA Shop</h2>
                <select>
                    <option>English</option>
                    <option>Georgian</option>
                </select>
            </div>
        {isLogin ? <LoginForm /> : <SignupForm/>}
        <div className={classes.acc}>
                <h3>{isLogin ?`Don't Have An Account? ---` : 'Already Have An Account? ---'}</h3>
                <button style={{border: "none", background: "none"}} onClick={change}><a style={{color: "blue"}}><h3>{ isLogin ? `Create` : "Sing in"}</h3></a></button>
            </div>
    </div>
    <div className={classes.anim1}>
        <VerticalAutoScroll images={images} />
    </div>
    <div></div>
    <div className={classes.anim2}>
        <VerticalAutoScrollDown images={images}/>
    </div>
    <div></div>
</div>

}

export default Auth