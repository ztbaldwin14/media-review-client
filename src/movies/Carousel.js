import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../App.css";
import starwars from "../img/starwars.jpg";
import lotr from "../img/lotr.jpg";
import harrypotter from "../img/harrypotter.jpg";
import jaws from "../img/jaws.jpg";
import spiderman from "../img/spiderman.jpg";
import legomovie from "../img/legomovie.jpg";
import shaun from "../img/shaun.jpg";
import bluesbros from "../img/bluesbros.jpg";
import chitty from "../img/chitty.jpg";

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
      <img src={chitty} className="sliderimg" style={{ padding: "20px" }} />
      <img
        src={harrypotter}
        className="sliderimg"
        style={{ padding: "20px" }}
      />
      <img src={lotr} className="sliderimg" style={{ padding: "20px" }} />
      <img src={jaws} className="sliderimg" style={{ padding: "20px" }} />
      <img src={spiderman} className="sliderimg" style={{ padding: "20px" }} />
      <img src={legomovie} className="sliderimg" style={{ padding: "20px" }} />
      <img src={shaun} className="sliderimg" style={{ padding: "20px" }} />
      <img src={bluesbros} className="sliderimg" style={{ padding: "20px" }} />
    </AliceCarousel>
  );
}

export default Carousel;
