/* eslint-disable react/prop-types */
// import React from 'react'
import style from "./product.module.css";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import { Rating } from "@mui/material";

const ProductCard = ({ item, renderDesc }) => {
  const { title, price, image, rating, id, description } = item;
  return (
    <div
      className={`${style.card__container} $ {flex && style.product__flexed}`}
    >
      <a href="#">
        <img src={image} alt="" />
      </a>
      <div>
        <h3>{item.title}</h3>
        {renderDesc && <p style={{ maxWidth: "750px" }}>{description}</p>}
        <div className={style.rating}>
          {/* rating  */}
          {/* <Rating value={rating?.rate} defaultValue={2.5} precision={0.5} /> */}
          <Rating value={rating?.rate} defaultValue={2.5} precision={0.5} />
          {/* count */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        <button className={style.button}>add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
