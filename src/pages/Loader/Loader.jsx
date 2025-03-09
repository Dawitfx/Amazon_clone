// import React from 'react'
import { RingLoader } from "react-spinners";
import loader from "./loader.module.css";

const Loader = () => {
  return (
    <div className={loader.loader}>
      <RingLoader />
    </div>
  );
};

export default Loader;
