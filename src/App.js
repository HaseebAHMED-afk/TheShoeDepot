import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Adidas from './Adidas';
import UnderArmour from './UnderArmour';
import Nike from './Nike';
import Home from './Home';
import Reebok from './Reebok';
import NavBar from './Components/NavBar/NavBar';

function App() {

  return (<div>
  <NavBar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/nike" element={<Nike />}/>
      <Route path="/adidas" element={<Adidas />}/>
      <Route path="/reebok" element={<Reebok />}/>
      <Route path="/underarmour" element={<UnderArmour />}/>
    </Routes>

    </div>
  );
}

export default App;
