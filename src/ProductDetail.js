import React from "react";
import Pic1 from "./jeans.jpg";
import { FaShare } from "react-icons/fa";
const ProductDetail = () => {
  return (
    <div className="container-flex product">
      <div className="row">
        <div className="column">
          <h6 className="order-heading">Order Details</h6>
          <img className="order-image" src={Pic1}></img>
        </div>
        <div className="column">
          <a className="product-link" href="">
            <span>
              <FaShare size="0.6rem" />
            </span>
            Share the product
          </a>
          <h6 className="desc-heading">
            Pepe jeans <br />
            <span className="text">
              Men wear jeans blue in color.
              <br />
            </span>
            Rs. 3452
          </h6>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
