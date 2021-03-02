import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src:
      "https://th.bing.com/th/id/OIP.z-BvaMHT-e4eDGIU910HwHaLH?w=182&h=273&c=7&o=5&dpr=2&pid=1.7",
    altText: "The Fellowship Of The King",
    caption: "The Fellowship Of The King",
  },
  {
    src:
      "https://designninjaz.com/wp-content/uploads/2016/06/Popeye-MoviePoster.jpg",
    altText: "Popeye",
    caption: "Popeye",
  },
  {
    src:
      "https://speckyboy.com/wp-content/uploads/2014/06/aliens_alternative_poster_movie.jpg",
    altText: "Aliens",
    caption: "Aliens",
  },
];

const CarouselImg = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
        style={{ filter: "invert(100%)" }}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
        style={{ cursor: "pointer", backgroundColor: "black" }}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
        style={{ cursor: "pointer", backgroundColor: "black" }}
      />
    </Carousel>
  );
};

export default CarouselImg;
