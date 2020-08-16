import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import FirstTile from "./Components/FirstTile/FirstTile";
import Carousel from "./Components/Carousel/Carousel";
import Footer from "./Components/Footer/Footer";
import data from "./Data/shoes.json";

function App() {
  const { nike, adidas, reebok, underarmour } = data;

  const shoes = [
    nike[0],
    nike[1],
    nike[2],
    underarmour[0],
    underarmour[1],
    adidas[0],
    adidas[1],
    reebok[0],
    reebok[1],
    reebok[2],
  ];


  return (
    <div>
      <NavBar />
      <FirstTile />
      <Carousel />
      <div className="new-arrival-heading">
        <h1>New Arrivals</h1>
        <p>Check out the hottest new arrivals</p>
      </div>
      <div className="row row-cols-1 row-cols-md-2 cardDeck">
        {shoes.map((item, i) => {
          return <div className="col mb-4">
            <div className="card card-detail" key={i}>
              <img src={item.img1} alt={item.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title item-name">{item.name}</h5>
                <p className="card-text item-detail">{item.detail}</p>
                <button className="btn btn-outline-dark btn-md">View</button>
              </div>
            </div>
          </div>;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
