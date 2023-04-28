import React from "react";
import "./Aminities.css";
import overleft from "../img/overleft.jpg";
import commondesign from "../img/commondesign.png";

const Aminities = () => {
  return (
    <div className="amemities">
      <div className="container">
        <div className="leftcontainer">
          <img src={overleft} alt="" />
        </div>

        <div className="rightcontainer">
          <div className="rightblockheading">
            <p>360° LIFESTYLE CONVENIENCES</p>
          </div>
          <div className="leftimg1">
            <img src={commondesign} alt="" />{" "}
          </div>
          <div className="rightactivities">
            <li>Ajmera i-Safe Lockers</li>
            <li>Imax Theatre</li>
            <li>i-Land Sport Academy</li>
            <li>Indi-Karting Go-Kart</li>
            <li>Pharmacy</li>
            <li>Fashion Boutique</li>
            <li>Grocery Shop</li>
            <li>Ice Cream Parlour</li>
            <li>Salon</li>
            <li>Bank & ATM Branches</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aminities;
