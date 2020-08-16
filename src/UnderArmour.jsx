import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import data from './Data/shoes.json';
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router';
import {Link} from 'react-router-dom';

const UnderArmour = (ua) => {

    const {underarmour} = data;

    return (
        <div>
            <NavBar />
            <div >
      <img className="logo" src="./src-images/underarmour.png" />
        <h3 className="top-heading">UnderArmour℗</h3>
        <h3 className="top-heading">Protect The House.</h3>
        <div className="row row-cols-1 row-cols-md-2 cardDeck">
          {underarmour.map((item, key) => {
            return (
              <div className="col mb-4">
                <div className="card card-detail" key={key}>
                  <img
                    src={item.img1}
                    alt={item.name}
                    className="card-img-top  "
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.detail}</p>
                    <button className="btn btn-outline-dark btn-md">
                    View
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Outlet />
      <Footer />
        </div>
    )
}

export default UnderArmour
