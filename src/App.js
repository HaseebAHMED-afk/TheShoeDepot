import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Adidas from './Adidas';
import UnderArmour from './UnderArmour';
import Nike from './Nike';
import Home from './Home';
import Reebok from './Reebok';
import ViewShoe from './ViewShoes'

function App() {

  return (<div>

    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/nike" element={<Nike />}>
      </Route>
      <Route path="/adidas" element={<Adidas />}>
      </Route>
      <Route path="/reebok" element={<Reebok />}>
      </Route>
      <Route path="/underarmour" element={<UnderArmour />}>
      </Route>
    </Routes>

    </div>
  );
}

export default App;
