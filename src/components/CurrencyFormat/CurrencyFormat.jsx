// import React from 'react'
import numeral from "numeral";

const CurrencyFormat = ({ amount }) => {
  const formattedAmount = numeral(amount).format("$0,0.00");
  return <div>{formattedAmount}</div>; // 12.00, 75.56
};

export default CurrencyFormat;
