import logo from './logo.svg';
import './App.css';
import ContactUs from './ContactUs';
import Welcome from './Welcome';
import Header from './Header';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  // var image = ;
  return (
    <div className="App">
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Welcome/>}></Route>
            <Route path='/contactUs' element={<ContactUs/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
