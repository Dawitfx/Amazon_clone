// import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import style from "./product.module.css";

function Product() {
  // https://fakestoreapi.com/products
  const [products, setProducts] = useState([]);
  //   console.log(products);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      //   console.log(res.data);
      setProducts(res.data);
    });
  }, []);
  return (
    <div className={style.products_container}>
      {products.map((productDatas, index) => (
        <ProductCard
          key={index}
          item={productDatas}
          renderDesc={false}
          renderAdd={true}
        />
      ))}
    </div>
  );
}

export default Product;
