import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css';

const Nike = ({data:{nike}}) => {
    if(nike){
        nike.map(item => console.log(item.name))}
    
    return (
        <div>
            <NavBar />
            <div className="new-arrival-heading">
                <h1>Nike</h1>
                <p>Just Do It</p>
                <div className="row row-cols-1 row-cols-md-2 cardDeck">
                    
                </div>
            </div>
        </div>
    )
}

export default Nike
