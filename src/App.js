import logo from './logo.svg';
import './App.css';

function App() {
  var image = "https://cdn.thewirecutter.com/wp-content/uploads/2020/04/laptops-lowres-2x1-.jpg?auto=webp&quality=75&crop=2:1&width=1024";
  return (
    <div className="App">
      <div className="header">
          <h1>Sai's Space</h1>
          <div className="headerRight">
              <h1>About</h1>
              <h1>Contact</h1>
          </div>
      </div>
      <div className="image">
          <img src={image} alt="background_image"/>
      </div>
    </div>
  );
}

export default App;
