import React from "react";
import './Carousel.css';

const Carousel = () => {
  return (
    <div
      id="carouselExampleFade"
      class="carousel slide carousel-fade"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active"  >
          <img src="./src-images/rock-underarmour.jpg" class="d-block w-100 item-image" alt="..." />
        </div>
        <div class="carousel-item" >
          <img src="./src-images/nike-cover.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item" >
          <img src="./src-images/messi-cover.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleFade"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleFade"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
