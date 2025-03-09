// import React from "react";
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeadr from "./LowerHeadr";
import amazonLogo from "../../assets/amazonLogo.png";
import { Link } from "react-router";
import { useContext } from "react";
import { DataCoentext } from "../DataProvider/DataProvider";

const Header = () => {
  const [{ basket }, dispatch] = useContext(DataCoentext);

  const totalItem = basket?.reduce((amount, item) => {
    return amount + item.amount;
  }, 0);

  return (
    <>
      <section className={classes.fixed}>
        <section className={classes.header__container}>
          {/* Logo */}
          <Link to="/" className={classes.logo__container}>
            <img src={amazonLogo} alt="Amazon logo" />
          </Link>

          {/* Delivery Info */}
          <div className={classes.delivery}>
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
            <Link to="/" className={classes.language}>
              <img
                src="https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-xl.png"
                alt="Language flag"
              />
              <select>
                <option value="EN">EN</option>
              </select>
            </Link>

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
              <span>{totalItem}</span>
            </Link>
          </div>
        </section>

        {/* Lower Header (Navigation Menu) */}
        <LowerHeadr />
      </section>
    </>
  );
};

export default Header;
