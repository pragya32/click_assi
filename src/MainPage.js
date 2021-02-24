import React from "react";
import image from "./pepe.png";
import ProductDetail from "./ProductDetail";
import {
  FaShare,
  FaInfoCircle,
  FaAngleDown,
  FaRegClock,
  FaTruckMoving,
  FaBell,
  FaAngleRight,
} from "react-icons/fa";
import "./App.css";
const Main = () => {
  return (
    <div className="container">
      <div className="col-xs-12 col-sm-6 col-md-9 col-lg-9 col-xl-10">
        <div className="head">
          <img src={image} className="image"></img>
        </div>
        <div className="content">
          <h5>
            <span className="grey">Your order is in transit</span>
            <br />
            <span className="black">Arriving on July </span>
            <br />
            <span>
              <a className="link" href="">
                <FaShare color="4966e9" size="0.5rem" />
                Share the link
              </a>
            </span>
          </h5>
          <h6 className="daydate">
            <span className="day">Monday</span>
            <br />
            <span className="date">05</span>
          </h6>
          <span className="Shipped">Shipped From Mumbai</span>
          <br />

          <a className="status" href="#">
            <FaInfoCircle color="blue" size="0.6rem" /> Status of the package
            <FaAngleDown color="4966e9" size="0.6rem" />
          </a>
          <br />
          <button className="view" href="#">
            View Shipment details
          </button>
          <button className="action" href="#">
            Take actions
          </button>
          <button className="btn1">
            <span>
              <FaRegClock size="0.7rem" />
              &nbsp;
            </span>
            Reschedule drop Off time
            <FaAngleRight className="FaAngleRight1" size="0.6rem" />
          </button>
          <button className="btn1">
            <span>
              <FaTruckMoving size="0.7rem" />
              &nbsp;
            </span>
            Change the shiiping Address
            <FaAngleRight className="FaAngleRight2" size="0.6rem" />
          </button>
          <button className="btn1">
            <span>
              <FaBell size="0.6rem" />
              &nbsp;
            </span>
            Get Delivery Updates
            <FaAngleRight className="FaAngleRight3" size="0.6rem" />
          </button>
          <ProductDetail />
        </div>
      </div>
    </div>
  );
};
export default Main;
