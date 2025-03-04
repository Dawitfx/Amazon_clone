/* eslint-disable react/prop-types */
// import React from 'react'
import style from "./category.module.css";

const CategoryCard = ({ data }) => {
  //   console.log(data);

  return (
    <div className={style.category}>
      <a href="#">
        <span>
          <h1>{data.title}</h1>
        </span>
        <img src={data.imgLink} alt="" />
        <p>shop know</p>
      </a>
    </div>
  );
};

export default CategoryCard;
