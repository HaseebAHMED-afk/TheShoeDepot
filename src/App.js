import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Adidas from './Adidas';
import UnderArmour from './UnderArmour';
import Nike from './Nike';
import Home from './Home';
import Reebok from './Reebok';

function App() {
  return (<div>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/underarmour" element={<UnderArmour />} />
      <Route path="/adidas" element={<Adidas />} />
      <Route path="/nike" element={<Nike />} />
      <Route path="/reebok" element={<Reebok />} />
    </Routes>

    </div>
  );
}

export default App;
