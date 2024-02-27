import { Fragment } from "react";

import cssClass from './Header.module.css';
import mealsImg from '../../assets/meals.jpg';



const Header = pops => {

    return<Fragment>
        <header className={cssClass.header}>
        <h1>React Meals</h1>
        <button>Cart</button>
        </header>
        <div className={cssClass['main-image']}>
            <img  src={mealsImg}  alt="A Table Full of delicious Food!"/>
        </div>
        
    </Fragment>
}
export default Header;