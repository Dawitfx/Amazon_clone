// import React from 'react'
import style from "./category.module.css";
// import  cardcomponent from "./CategoryCard"
import { categoryInfos } from "./CategoryFull";
import CategoryCard from "./CategoryCard";

function Category() {
  return (
    <div className={style.category_container}>
      {categoryInfos.map((card, index) => (
        <CategoryCard key={index} data={card} />
      ))}
    </div>
  );
}

export default Category;
