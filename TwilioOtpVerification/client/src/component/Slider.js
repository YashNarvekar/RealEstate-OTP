import React from "react";
// import SimpleImageSlider from "react-simple-image-slider";
import "./Slider.css";
// import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import slide1 from "../img/slide-1.jpg";
import slide2 from "../img/slide-2.jpg";
import slide3 from "../img/slide-3.jpg";

const Slider = () => {
  // const sliderImages = [
  //   {
  //     url: "http://www.ajmeragreenfinity.com/images/slide-1.jpg",
  //   },
  //   {
  //     url: "http://www.ajmeragreenfinity.com/images/slide-2.jpg",
  //   },
  // ];
  return (
    <div className="slider">
      {/* <SimpleImageSlider
        className="img"
        style={{
          border: "12px solid blue",
          objectFit: "cover",
          width: "100%",
          // paddingTop: "100px",
          // paddingBottom: "100px",
          // marginBottom: "100px",
        }}
        width="100%"
        height="800px"
        images={sliderImages}
        showNavs={true}
      /> */}

      <Carousel className="carousel">
        <div>
          <img src={slide1} alt="img1" />
        </div>
        <div>
          <img src={slide2} alt="img1" />
        </div>
        <div>
          <img src={slide3} alt="img1" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
