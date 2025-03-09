// import React from "react";
import { useContext } from "react";
import Layout from "../Layout/Layout";
import { DataCoentext } from "../../components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import ProductCard from "../../components/Product/ProductCard";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router";
import classes from "./cart.module.css";

const Cart = () => {
  const [{ basket }, dispatch] = useContext(DataCoentext);
  const total = basket?.reduce((amount, item) => {
    return amount + item.price * item.amount;
  }, 0);

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };
  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart__container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {basket?.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            basket.map((item, index) => (
              <>
                <section className={classes.cart_product}>
                  <ProductCard
                    key={index}
                    item={item}
                    renderDescription={true}
                    renderAdd={false}
                    flex={true}
                  />
                  <div className={classes.btn_container}>
                    <button
                      className={classes.btn}
                      onClick={() => increment(item)}
                    >
                      +
                    </button>
                    <span>{item.amount}</span>
                    <button
                      className={classes.btn}
                      onClick={() => decrement(item.id)}
                    >
                      -
                    </button>
                  </div>
                </section>
              </>
            ))
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={`${classes.subtotal}`}>
            <div>
              <p>Subtotal ({basket?.length} item)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contain</small>
            </span>
            <Link to="/payment">proceed to chechout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Cart;
