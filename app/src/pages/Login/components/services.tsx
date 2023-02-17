import React from "react";
import "../css/index.css";
import Checked from "../assets/Checked.svg";

interface IProps {
  title: string;
  desc: string;
  image: string;
}
const ServiceComponent: React.FC<IProps> = ({ title, desc, image }) => {
  return (
    <div className="item">
      <img src={image} alt="" />
      <div className="inner_stack">
        <h5>{title}</h5>
        <p>{desc}</p>
      </div>
      <div className="mark">
        <img src={Checked} alt="" />
      </div>
    </div>
  );
};

export default ServiceComponent;
