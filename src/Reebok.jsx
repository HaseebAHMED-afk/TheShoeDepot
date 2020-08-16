import React from 'react'
import data from './Data/shoes.json';
import Footer from './Components/Footer/Footer';
import Fade from 'react-reveal/Fade';


const Reebok = () => {

    const { reebok } = data;

    return (
        <div>
            <div className="top-heading">
                <img src="./src-images/reebok.png" className="logo" alt="reebok-logo" />
                <h3>Sport The Unexpected</h3>
            </div>
            <div className="row row-cols-1 row-cols-md-2 cardDeck">
            {
                reebok.map((item,key) => {
                    return(
                        <div className="col mb-4">
                        <Fade bottom >
                <div className="card card-detail" key={key}>
                  <img
                    src={item.img1}
                    alt={item.name}
                    className="card-img-top"
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
                    )
                })
            }
            </div>
            <Footer />
        </div>
    )
}

export default Reebok
