import React from "react";
import "./App.css";
import data from "./Data/shoes.json";
import Footer from "./Components/Footer/Footer";
import Fade from 'react-reveal/Fade';

const Nike = () => {
  const { nike } = data;

  return (
    <div>
      <div >
      <img className="logo" src="./src-images/nike.png" alt="nike-logo" />
        <h3 className="top-heading">Just Do It.</h3>
        <h3 className="top-heading">But with the best.</h3>
        <div className="row row-cols-1 row-cols-md-2 cardDeck">
          {nike.map((item, key) => {
            return (
              <div className="col mb-4">
              <Fade bottom >
                <div className="card card-detail" key={key}>
                  <img
                    src={item.img1}
                    alt={item.name}
                    className="card-img-top "
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.detail}</p>
                    <button className="btn btn-outline-dark btn-md">
                      View
                    </button>
                  </div>
                </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Nike;
