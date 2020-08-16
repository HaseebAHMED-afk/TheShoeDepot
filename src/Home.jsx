import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import FirstTile from "./Components/FirstTile/FirstTile";
import Carousel from "./Components/Carousel/Carousel";
import Footer from "./Components/Footer/Footer";

function App({ data: { nike, adidas, reebok, underarmour } }) {
  const nikeItem1 = nike ? nike[0] : null;
  const nikeItem2 = nike ? nike[1] : null;
  const adidasItem1 = adidas ? adidas[0] : null;
  const adidasItem2 = adidas ? adidas[1] : null;
  const reebokItem1 = reebok ? reebok[0] : null;
  const reebokItem2 = reebok ? reebok[1] : null;
  const uaItem1 = underarmour ? underarmour[0] : null;
  const uaItem2 = underarmour ? underarmour[2] : null;
  const data = [
    nikeItem1,
    nikeItem2,
    adidasItem1,
    adidasItem2,
    reebokItem1,
    reebokItem2,
    uaItem1,
    uaItem2,
  ];
  return (
    <div>
      <NavBar />
      <FirstTile />
      <Carousel />
      <div className="new-arrival-heading">
      <h1 >New Arrivals</h1>
      <p>Check out the hottest new arrivals</p>
      </div>
      <div className="row row-cols-1 row-cols-md-2 cardDeck">
      {data.map((item, i) => {
        const img = item ? item.img1 : null;
        const heading = item ? item.name : null;
        const desc = item ? item.detail : null;
        return (
          <div className="col mb-4">
                  <div className="card card-detail" key={i}  >
                    <img src={img} alt={heading} className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">{heading}</h5>
                      <p className="card-text">{desc}</p>
                      <button className="btn btn-outline-dark btn-md">View</button>
                    </div>
                  </div>
                  </div>
        );
      })}
      </div>
      <Footer />
      </div>
  );
}

export default App;
