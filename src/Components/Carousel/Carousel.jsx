import React from "react";
import './Carousel.css';

const Carousel = () => {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active"  >
          <img src="./src-images/rock-underarmour.jpg" className="d-block w-100 item-image" alt="underarmour-rock" />
        </div>
        <div className="carousel-item" >
          <img src="./src-images/nike-cover.jpg" className="d-block w-100" alt="nike-cover" />
        </div>
        <div className="carousel-item" >
          <img src="./src-images/messi-cover.jpg" className="d-block w-100" alt="messi-cover" />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleFade"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleFade"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
