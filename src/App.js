import React from 'react';
import './App.css';
import ContactUs from './ContactUs';
import Welcome from './Welcome';
import Header from './Header';
import About from './About';
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  // var image = ;
  return (
    <>
    <div className="App">
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Welcome/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contactUs' element={<ContactUs/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
