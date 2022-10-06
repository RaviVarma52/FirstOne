import "../styling/Home.css"
import {Carousel} from '3d-react-carousal';

const Home = () => {
    
    return (
        <div className="Home">
          <div className="mainCarousel">
                <div className="leftCardInCarousel"></div>
                <div className="carousel">
                        <div className="leftInCarousel">
                           <h1>Are you ready to</h1>
                           <h1><b>lead the way</b></h1>
                           <h5>Luxury meets ultimate sitting comfort</h5>
                           <button>Discover<i class="fa fa-arrow-right"></i></button>
                        </div>
                        <div className="rightInCarousel">
                            <div className="ShoeInCarousel"></div>
                        </div>
                </div>
                <div className="rightCardInCarousel"></div>
            </div>
            <div className="cards">
                <div className="card-home">
                    <div className="card-top-1">
                      <div className="NikeAir"></div>
                    </div>
                    <div className="card-bottom"> 
                        <h5>Nike Air</h5>
                        <div className="buttons"><h6 style={{color: "Gray"}}>$189.00</h6><h6><s>$289.00</s></h6></div>
                    </div>
                    <button><i class="fa fa-shopping-cart"></i>Add to Cart</button>
                </div> 
                <div className="card-home">
                  <div className="card-top-2">
                  <div className="AirJordan"></div>
                  </div>
                  <div className="card-bottom"> 
                        <h5>Air Jordan</h5>
                        <div className="buttons"><h6 style={{color: "Gray"}}>$199.00</h6><h6><s>$289.00</s></h6></div>
                    </div>
                    <button><i class="fa fa-shopping-cart"></i>Add to Cart</button>
                </div> <div className="card-home">
                  <div className="card-top-3">
                  <div className="NikeNitro"></div>
                  </div>
                  <div className="card-bottom"> 
                        <h5>Nike Nitro</h5>
                        <div className="buttons"><h6 style={{color: "Gray"}}>$140.00</h6><h6><s>$240.00</s></h6></div>
                    </div>
                    <button><i class="fa fa-shopping-cart"></i>Add to Cart</button>
                </div> <div className="card-home">
                  <div className="card-top-4">
                  <div className="AirSpain"></div>
                  </div>
                  <div className="card-bottom"> 
                        <h5>Air Spain</h5>
                        <div className="buttons"><h6 style={{color: "Gray"}}>$149.00</h6><h6><s>$249.00</s></h6></div>
                    </div>
                    <button><i class="fa fa-shopping-cart"></i>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home
