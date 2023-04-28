import React from "react";
import "./Overview.css";
import { FaCheck } from "react-icons/fa";
import commondesign from "../img/commondesign.png";
import Layer1 from "../img/Layer1.png";
import Layer2 from "../img/Layer2.png";
import Layer4 from "../img/Layer4.png";
import Layer5 from "../img/Layer5.png";
import Shape3 from "../img/Shape3.png";
import midimg from "../img/midimg.jpg";
import rightop from "../img/rightop.jpg";

const Overview = () => {
  return (
    <div className="overview-main">
      <div className="overviewTop">
        <div className="header">
          <p>ABOUT AJMERA GREENFINITY</p>
        </div>
        <div className="headerDesign">
          <img src={commondesign} alt="" />
        </div>
        <div className="details">
          <p>
            A rare pocket of heaven in downtown Mumbai, Ajmera Greenfinity comes
            as a breath of fresh air to the city-dweller in the configurations
            of 1 and 2 BHK apartments.
          </p>
          <br />
          <p>
            The rolling panoramic views, fresh air and ample sunshine are simple
            delights that’ll fill your soul. Coupled with every lifestyle
            amenity that you may desire, life here is bound to be surreal and
            green in every way.
          </p>
        </div>

        <div className="header">
          <p>PROJECT OVERVIEW OF AJMERA GREENFINITY</p>
        </div>
        <div className="headerDesign">
          <img src={commondesign} alt="" />
        </div>

        <img
          src="http://www.ajmeragreenfinity.com/images/proj-icons/Layer-38.png"
          alt=""
        />

        <div className="configBlock">
          <div className="block1">
            <div className="blockimg">
              <img src={Layer1} alt="" />
            </div>
            <div className="blockinfo">
              Close Proximity To Central Business Districts
            </div>
          </div>

          <div className="block1">
            <div className="blockimg">
              <img src={Layer2} alt="" />
            </div>
            <div className="blockinfo">
              Close Proximity To Central Business Districts
            </div>
          </div>

          <div className="block1">
            <div className="blockimg">
              <img src={Shape3} alt="" />
            </div>
            <div className="blockinfo">
              Close Proximity To Central Business Districts
            </div>
          </div>
        </div>

        <div className="configBlock2">
          <div className="block2">
            <div className="blockimg">
              <img src={Layer4} alt="" />
            </div>
            <div className="blockinfo">
              Close Proximity To Central Business Districts
            </div>
          </div>

          <div className="block2">
            <div className="blockimg">
              <img src={Layer5} alt="" />
            </div>
            <div className="blockinfo">
              Close Proximity To Central Business Districts
            </div>
          </div>
        </div>
      </div>

      <div className="overviewBottom">
        <div className="content">
          <div className="contentleft">
            <div className="leftheader">
              <p>Tranquil Point</p>
            </div>
            <div className="leftimg">
              <img src={commondesign} alt="" />
            </div>
            <div className="leftactivities">
              <li>
                <FaCheck /> Jogging Track
              </li>
              <li>
                <FaCheck /> Multi-play Court
              </li>
              <li>
                <FaCheck /> Kids Play Area
              </li>
              <li>
                <FaCheck /> Activity Lawn
              </li>
              <li>
                <FaCheck /> Reflecology Path
              </li>
            </div>
          </div>
          <div className="contentmid">
            <div className="middleimg">
              <img src={midimg} alt="" />
            </div>
          </div>
          <div className="contentright ">
            <div className="rightimg1">
              <img src={rightop} alt="" />
            </div>
            <div
              className="rightActivities"
              style={
                {
                  // marginLeft: "-10px",
                }
              }
            >
              <div className="leftheader">
                <p>Cloud Zone</p>
              </div>
              <div className="leftimg">
                <img
                  style={{
                    marginLeft: "-20px",
                  }}
                  src={commondesign}
                  alt=""
                />
              </div>
              <div className="leftactivities">
                <li>
                  <FaCheck /> Meditation Lawn
                </li>
                <li>
                  <FaCheck /> Outdoor Gym
                </li>
                <li>
                  <FaCheck /> Board Game Pavillion
                </li>
                <li>
                  <FaCheck /> Celebration Lawn & Deck
                </li>
                <li>
                  <FaCheck /> Jacuzzi Deck with Seating
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
