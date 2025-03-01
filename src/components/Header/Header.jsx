// import React from "react";
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeadr from "./LowerHeadr";
import amazonLogo from "../../assets/amazonLogo.png";

const Header = () => {
  return (
    <>
      <section className={classes.header__container}>
        {/* Logo */}
        <a href="#" className={classes.logo__container}>
          <img src={amazonLogo} alt="Amazon logo" />
        </a>

        {/* Delivery Info */}
        <div className={classes.deliver}>
          <SlLocationPin />
          <div>
            <p>Deliver to</p>
            <span>Ethiopia</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className={classes.search}>
          <select>
            <option value="">All</option>
          </select>
          <input type="text" placeholder="Search Amazon" />
          <BsSearch size={25} />
        </div>

        {/* Right Side Links */}
        <div className={classes.order__container}>
          {/* Language Selector */}
          <a href="#" className={classes.language}>
            <img
              src="https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-xl.png"
              alt="Language flag"
            />
            <select>
              <option value="EN">EN</option>
            </select>
          </a>

          {/* Sign In */}
          <a href="#">
            <p>Sign in</p>
            <span>Account & Lists</span>
          </a>

          {/* Returns & Orders */}
          <a href="#">
            <p>Returns</p>
            <span>& Orders</span>
          </a>

          {/* Cart */}
          <a href="#" className={classes.cart}>
            <BiCart size={35} aria-label="Cart" />
            <span>0</span>
          </a>
        </div>
      </section>

      {/* Lower Header (Navigation Menu) */}
      <LowerHeadr />
    </>
  );
};

export default Header;
