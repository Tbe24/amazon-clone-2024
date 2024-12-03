import React from "react";
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";

function Header() {
  return (
    <section>
      <header className={classes.header_container}>
        {/* Logo and Delivery Section */}
        <div className={classes.logo_container}>
          <a href="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon Logo"
            />
          </a>
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
          <a href="/" className={classes.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              alt="US Flag"
            />
            <select>
              <option value="">EN</option>
            </select>
          </a>
          <a href="/signin">
            <p>Sign In</p>
            <span>Account & Lists</span>
          </a>
          <a href="/orders">
            <p>Returns</p>
            <span>& Orders</span>
          </a>
          <a href="/cart" className={classes.cart}>
            <BiCart size={35} />
            <span>0</span>
          </a>
        </div>
      </header>
      <LowerHeader />
    </section>
  );
}

export default Header;
