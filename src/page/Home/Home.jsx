import React from "react";
import { Button } from "reactstrap";
import NavigationBar from "../../component/Navbar/NavigationBar";
import "./home.scss";
import img4 from "../../assets/img/jakub-neskora-WOWqL4Bcy-I-unsplash.jpg";
import img5 from "../../assets/img/karsten-winegeart-RXb6RQi5hi0-unsplash.jpg";
import img6 from "../../assets/img/yulian-as-C-w-2W-_29w-unsplash.jpg";
import SliderCarousel from "../../component/Carousel/SliderCarousel";

const Home = () => {
  const items = [
    {
      src: img4,
      altText: "Slide 1",
      caption: "Slide 1",
    },
    {
      src: img5,
      altText: "Slide 2",
      caption: "Slide 2",
    },
    {
      src: img6,
      altText: "Slide 3",
      caption: "Slide 3",
    },
  ];

  return (
    <div>
      <div className="position-sticky top-0" style={{ zIndex: "99" }}>
        <NavigationBar />
      </div>
      <div id="home">
        <Button className="btn-prime">fsfsdf</Button>
        <div className="hero_home">
          <SliderCarousel items={items} />
        </div>
      </div>
    </div>
  );
};

export default Home;
