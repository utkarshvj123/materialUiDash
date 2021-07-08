import React from "react";
import { Container } from "./styledComponent";

const Card = () => {
  return (
    <Container className="isoSaleWidget">
      <h3 className="isoSaleLabel">
        <span>Income</span>
      </h3>
      <span className="isoSalePrice">
        <span>$15000</span>
      </span>
      <p className="isoSaleDetails">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod
          tempor
        </span>
      </p>
    </Container>
  );
};
export default Card;
