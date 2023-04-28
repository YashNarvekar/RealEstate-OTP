import React from "react";
import "./Cat.css";
const Cat = ({ cardIndex, data }) => {
  return (
    <div>
      <div></div>
      {data[cardIndex].map((item) => {
        return (
          <div className="card">
            {/* <p>
              {item.title} <br /> {item.name}
              <br />
            </p> */}
            <div className="image">
              <img src={item.href} alt="" />
              <img src={item.href2} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Cat;
