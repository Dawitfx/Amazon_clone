// import Rea

import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { commonUrl } from "../../Api/endPoint";
import { useParams } from "react-router";
import axios from "axios";
import ProductCard from "../../components/Product/ProductCard";
import classes from "./result.module.css";
import Loader from "../Loader/Loader";

const Result = () => {
  const [result, setResult] = useState([]);
  const { categoryName } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${commonUrl}/category/${categoryName}`)
      .then((res) => {
        setResult(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [categoryName]);
  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category /</p>
          <hr />
          <div className={classes.product_container}>
            {result.map((product, index) => (
              <ProductCard
                key={index}
                item={product}
                renderDesc={false}
                renderAdd={true}
              />
            ))}
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Result;
