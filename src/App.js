import './App.css';
import ContactUs from './ContactUs';
import Welcome from './Welcome';
import Header from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Welcome/>}></Route>
            <Route path='/contactUs' element={<ContactUs/>}></Route>
            <Route path='/Home' element={<Home/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
