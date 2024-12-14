import React, { useContext } from "react";
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";

function Header() {
  const [state, dispatch] = useContext(DataContext); // Correct destructuring
  const { basket } = state; // Access basket from state

  // console.log("Basket Length:", basket?.length || 0); // Safe access
const totalItem = basket?.reduce((amount, item)=>{
     return item.amount + amount
},0)

  return (
    <section className={classes.fixed}>
      <header className={classes.header_container}>
        {/* Logo and Delivery Section */}
        <div className={classes.logo_container}>
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon Logo"
            />
          </Link>
          <div className={classes.delivery}>
            <SlLocationPin size={20} />
            <div>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className={classes.search}>
          <select>
            <option value="">All</option>
          </select>
          <input type="text" placeholder="Search product" />
          <BsSearch size={25} />
        </div>

        {/* Right Section (Language, Links, Cart) */}
        <div className={classes.order_container}>
          <Link to="/" className={classes.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              alt="US Flag"
            />
            <select>
              <option value="">EN</option>
            </select>
          </Link>
          <Link to="/auth">
            <p>Sign In</p>
            <span>Account & Lists</span>
          </Link>
          <Link to="/orders">
            <p>Returns</p>
            <span>& Orders</span>
          </Link>
          <Link to="/cart" className={classes.cart}>
            <BiCart size={35} />
            <span>{totalItem}</span> {/* Safe access */}
          </Link>
        </div>
      </header>
      <LowerHeader />
    </section>
  );
}

export default Header;
