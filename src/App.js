import React from 'react';
import './styling/App.css';
import ContactUs from './components/ContactUs';
import Welcome from './components/Welcome';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
// import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Welcome/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contactUs' element={<ContactUs/>}></Route>
            <Route path='/Home' element={<Home/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
