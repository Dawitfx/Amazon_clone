/* eslint-disable react/prop-types */
// import React from 'react'
import { Link } from "react-router";
import style from "./category.module.css";

const CategoryCard = ({ data }) => {
  //   console.log(data);

  return (
    <div className={style.category}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data.name}</h2>
        </span>
        <img src={data.imgLink} alt="" />
        <p>shop know</p>
      </Link>
    </div>
  );
};

export default CategoryCard;
