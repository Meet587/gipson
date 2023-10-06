import React, { useState } from "react";
import { Carousel, CarouselItem, CarouselControl, Button } from "reactstrap";
import img4 from "../../assets/img/jakub-neskora-WOWqL4Bcy-I-unsplash.jpg";
import img5 from "../../assets/img/karsten-winegeart-RXb6RQi5hi0-unsplash.jpg";
import img6 from "../../assets/img/yulian-as-C-w-2W-_29w-unsplash.jpg";

const SliderCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const onExiting = () => {
    setAnimating(true);
  };

  const onExited = () => {
    setAnimating(false);
  };

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === props.items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? props.items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = props.items.map((item) => (
    <CarouselItem onExiting={onExiting} onExited={onExited} key={item.src}>
      <img src={item.src} className=" img-fluid" alt={item.altText} />
    </CarouselItem>
  ));
  return (
    <>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        {slides}
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </>
  );
};

export default SliderCarousel;
