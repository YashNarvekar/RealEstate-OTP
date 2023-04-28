import React, { useState } from "react";
import Cat from "./sliding/Cat";
import Data from "./sliding/Data";
import "./home.css";

// import "./gallery.css";

const Gallery = () => {
  const [state, setstate] = useState("Secondcard");

  return (
    <div className="signup">
      <div className="heading12">
        <div className="hedus">
          <p style={{ color: "black", width: "30px" }}>Gallery</p>
        </div>
        <div className="images">
          <img src="http://www.ajmeragreenfinity.com/images/div.png" alt="" />
        </div>
      </div>
      <div className="window">
        <nav className="nav">
          <button onClick={() => setstate("Firstcard")}>tranquil point</button>
          <button onClick={() => setstate("Secondcard")}>cloud zone</button>
          <button onClick={() => setstate("Thirdcard")}>elevation</button>
          <button onClick={() => setstate("Fourthcard")}>show flat</button>
          <button onClick={() => setstate("Fifthcard")}>2D dloor plan</button>
          <button onClick={() => setstate("sixcard")}>3D unit plan</button>
          <button onClick={() => setstate("sevencard")}>
            construction update
          </button>
          <button onClick={() => setstate("eightcard")}>
            terrace slab completed
          </button>
        </nav>
        <div className="cat">
          {state === "Firstcard" && <Cat data={Data} cardIndex={0} />}
          {state === "Secondcard" && <Cat data={Data} cardIndex={1} />}
          {state === "Thirdcard" && <Cat data={Data} cardIndex={2} />}
          {state === "Fourthcard" && <Cat data={Data} cardIndex={3} />}
          {state === "Fifthcard" && <Cat data={Data} cardIndex={4} />}
          {state === "sixcard" && <Cat data={Data} cardIndex={5} />}
          {state === "sevencard" && <Cat data={Data} cardIndex={6} />}
          {state === "eightcard" && <Cat data={Data} cardIndex={7} />}
        </div>
        <div className="design">
          <img
            // style={{ border: "2px solid black" }}
            src="http://www.ajmeragreenfinity.com/images/about/lamp_about-us.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
