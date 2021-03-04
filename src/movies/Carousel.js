import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../App.css";
import starwars from "../img/starwars_.jpg";
import lotr from "../img/lotr.jpg";
import harrypotter from "../img/harrypotter.jpg";

function Carousel() {
  return (
    <AliceCarousel
      className="Acarousel"
      autoPlay
      autoHeight={true}
      autoWidth={true}
      autoPlayInterval="3000"
    >
      <img src={starwars} className="sliderimg" style={{ padding: "20px" }} />
      <img src={lotr} className="sliderimg" style={{ padding: "20px" }} />
      <img
        src={harrypotter}
        className="sliderimg"
        style={{ padding: "20px" }}
      />
      <img
        src={harrypotter}
        className="sliderimg"
        style={{ padding: "20px" }}
      />
      <img
        src={harrypotter}
        className="sliderimg"
        style={{ padding: "20px" }}
      />
      <img
        src={harrypotter}
        className="sliderimg"
        style={{ padding: "20px" }}
      />
      <img
        src={harrypotter}
        className="sliderimg"
        style={{ padding: "20px" }}
      />
      <img
        src={harrypotter}
        className="sliderimg"
        style={{ padding: "20px" }}
      />
    </AliceCarousel>
  );
}

export default Carousel;
