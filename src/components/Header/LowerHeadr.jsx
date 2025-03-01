// import React from "react";
import classes from "./Header.module.css";
import { AiOutlineMenu } from "react-icons/ai";

const LowerHeadr = () => {
  return (
    <nav className={classes.lower__container}>
      <ul>
        <li className={classes.menu}>
          <AiOutlineMenu />
          <span>All</span>
        </li>
        <li>Today's Deals</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </nav>
  );
};

export default LowerHeadr;
