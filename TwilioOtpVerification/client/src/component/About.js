import React from "react";
import "./About.css";
import built from "../img/built.jpg";

const About = () => {
  return (
    <div className="aboutComponent">
      <div className="MainContainer">
        <div className="aboutleft">
          <div className="heading1">
            <p className="about">ABOUT AJMERA GROUP</p>
          </div>
          <div className="info">
            <p>
              Having established itself over 54 years, Ajmera Group is
              recognized as one of India's leading Real Estate Company. The
              reach and interest of the Ajmera Group has only grown with time
              and has extended to other realms, such as solar power, sports,
              vaults security, cement and social welfare. The company now has a
              strong presence in and around Mumbai, Pune, Ahmedabad, Surat,
              Rajkot, Bangalore and London. Quality, innovative construction
              technology, comfort, aesthetic appeal and maximum value for your
              money are few attributes that enrich Ajmera with the belief that
              people have entrusted in them.
            </p>
          </div>
        </div>
        <div className="aboutright">
          <div className="rightimg">
            <img src={built} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
