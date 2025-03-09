// import React from 'react'
import { useParams } from "react-router-dom";
import { commonUrl } from "../../Api/endPoint";
import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../Layout/Layout";
import ProductCard from "../../components/Product/ProductCard";
import Loader from "../Loader/Loader";

// const commonUrl = https://fakestoreapi.com/products/productsId

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${commonUrl}/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [productId]);
  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard item={product} renderDesc={true} flex={true} />
      )}
    </Layout>
  );
};

export default ProductDetail;
