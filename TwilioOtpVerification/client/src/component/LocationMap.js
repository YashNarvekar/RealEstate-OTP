import React from "react";
import "./LocationMap.css";
import commondesign from "../img/commondesign.png";
import map1 from "../img/map1.png";
import map2 from "../img/map2.png";
import map3 from "../img/map3.png";
import map4 from "../img/map4.png";
const LocationMap = () => {
  return (
    <div className="containerr">
      <div className="heading45">
        <p>LOCATION MAP</p>
        <div className="images">
          <img src={commondesign} alt="" />{" "}
        </div>
      </div>
      <div className="mainContainerr">
        <div className="leftcontainerr">
          <div className="locationimg">
            <img
              src="http://www.ajmeragreenfinity.com/images/ajmerailandmap.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="rightcontainerr">
          <div className="outside">
            <div className="outsideblock">
              <div className="block">
                <div className="blockimg">
                  <img src={map1} alt="" />
                </div>
                <div className="blockinfo">
                  Close Proximity To Central Business Districts
                </div>
              </div>
            </div>
          </div>
          <div className="outside">
            <div className="outsideblock">
              <div className="block">
                <div className="blockimg">
                  <img src={map2} alt="" />
                </div>
                <div className="blockinfo">
                  Close Proximity To Central Business Districts
                </div>
              </div>
            </div>
          </div>
          <div className="outside">
            <div className="outsideblock">
              <div className="block">
                <div className="blockimg">
                  <img src={map2} alt="" />
                </div>
                <div className="blockinfo">
                  Close Proximity To Central Business Districts
                </div>
              </div>
            </div>
          </div>
          <div className="outside">
            <div className="outsideblock">
              <div className="block">
                <div className="blockimg">
                  <img src={map2} alt="" />
                </div>
                <div className="blockinfo">
                  Close Proximity To Central Business Districts
                </div>
              </div>
            </div>
          </div>
          <div className="outside">
            <div className="outsideblock">
              <div className="block">
                <div className="blockimg">
                  <img src={map3} alt="" />
                </div>
                <div className="blockinfo">
                  Close Proximity To Central Business Districts
                </div>
              </div>
            </div>
          </div>
          <div className="outside">
            <div className="outsideblock">
              <div className="block">
                <div className="blockimg">
                  <img src={map4} alt="" />
                </div>
                <div className="blockinfo">
                  Close Proximity To Central Business Districts
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
