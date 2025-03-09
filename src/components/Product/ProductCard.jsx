/* eslint-disable react/prop-types */
// import React from 'react'
import style from "./product.module.css";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import { Rating } from "@mui/material";
import { Link } from "react-router";
import { Type } from "../../Utility/action.type";
import { DataCoentext } from "../DataProvider/DataProvider";
import { useContext } from "react";

const ProductCard = ({ item, renderDesc, flex, renderAdd }) => {
  const { id, title, price, image, rating, description } = item;
  // console.log(item);

  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(DataCoentext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        title,
        price,
        image,
        rating,
        id,
        description,
      },
    });
  };

  return (
    <div
      className={`${style.card__container} ${flex && style.product__flexed}`}
    >
      <Link to={`/product/${id}`}>
        <img src={image} alt="" />
      </Link>

      <div>
        <h3>{title}</h3>
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
        {renderAdd && (
          <button onClick={addToCart} className={style.button}>
            add to cart
          </button>
        )}
        {/* <button className={style.button}>add to cart</button> */}
      </div>
    </div>
  );
};

export default ProductCard;
