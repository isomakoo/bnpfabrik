import { Route, Routes } from 'react-router-dom';
import 'flag-icon-css/css/flag-icons.min.css';
import './App.css';
import Header from './Component/Header/Header';
import Hero from './Component/Hero/Hero';
import Home from './Component/Home/Home';
import Foother from './Component/Foother/Foother';
import TelegramButton from './Component/telegram/telegram';
import Main from './Component/Main/Main';
import Bizhaqimizda from './Component/Bizhaqimizda/Bizhaqimizda';
import Contakt from './Component/Contakt/Contakt';
import Tuplam from './Component/tuplam/tuplam';

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} /> 
        <Route path="/product/:season/:id" element={<Main />} />
        <Route path='/shop' element={<Tuplam></Tuplam>}/>
        <Route path="/about-us" element={<Bizhaqimizda></Bizhaqimizda>} /> 
        <Route path='/contact-us' element={<Contakt></Contakt>}/>
      </Routes>
      <TelegramButton />
    </>
  );
}

export default App;
