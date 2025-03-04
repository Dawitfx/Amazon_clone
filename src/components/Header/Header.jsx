// import React from "react";
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeadr from "./LowerHeadr";
import amazonLogo from "../../assets/amazonLogo.png";
import { Link } from "react-router";

const Header = () => {
  return (
    <>
      <section className={classes.header__container}>
        {/* Logo */}
        <Link to="/" className={classes.logo__container}>
          <img src={amazonLogo} alt="Amazon logo" />
        </Link>

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
          <Link to="/auth">
            <p>Sign in</p>
            <span>Account & Lists</span>
          </Link>

          {/* Returns & Orders */}
          <Link to="/orders">
            <p>Returns</p>
            <span>& Orders</span>
          </Link>

          {/* Cart */}
          <Link to="/cart" className={classes.cart}>
            <BiCart size={35} aria-label="Cart" />
            <span>0</span>
          </Link>
        </div>
      </section>

      {/* Lower Header (Navigation Menu) */}
      <LowerHeadr />
    </>
  );
};

export default Header;
