import React,{useEffect,useState} from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Adidas from './Adidas';
import UnderArmour from './UnderArmour';
import Nike from './Nike';
import Home from './Home';
import Reebok from './Reebok';
import { fetchShoes } from './API/index';

function App() {

  const [data, setData] = useState([])

  const fecthItems = async ()=>{
    const fetchedData = await fetchShoes();
    setData(fetchedData);
  }

  useEffect(() => {
    fecthItems()
  }, [])


  return (<div>

    <Routes>
      <Route path="/" element={<Home data={data} />} />
      <Route path="/underarmour" element={<UnderArmour  />} />
      <Route path="/adidas" element={<Adidas/>} />
      <Route path="/nike" element={<Nike data={data} />} />
      <Route path="/reebok" element={<Reebok  />} />
    </Routes>

    </div>
  );
}

export default App;
