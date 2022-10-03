import React from 'react';
import './About.css';


const About = () => {
    return(
        <>
         <div className="About">
          <div className="div1">
            <div className="text">
            <p><span><b>Rediscover a <br/> great shopping <br/> tradition.</b></span><br/>
            <i>create your own style ...<br/>Let it be unique for yourself & yet indentifiable for others.<br/>
            <span>stay home and shop online</span></i></p>
            <button>Explore <i className='fa fa-arrow-right'></i></button>
            </div>
            <div className="shop"></div>
            </div>
            <div className='div2'>
            <div className='phone'></div>
            <div className='card'>
              <p className='card-title'>Step  <span style={{fontSize:18}}>1</span></p>
              <p className='card-body'>Choose your products</p>
              <p>The number is not tens or hundreds it's thousands. You have multiple choices to go with verified reviews and ratings by customers.</p>
            </div>
            <div className='card'>
              <p className='card-title'>Step <span style={{fontSize:18}}>2</span></p>
              <p className='card-body'>Add to cart</p>
              <p>Do you want to make choice out of choices? Don't bother just put things you like into cart and buy them when needed.</p>
            </div>
            <div className='card'>
              <p className='card-title'>Step <span style={{fontSize:18}}>3</span></p>
              <p className='card-body'>Confirm your order</p>
              <p>Wow it's just a click to place your order and stay relaxed. we will knock your door soon.</p>
            </div>
            <div className='card'>
              <p className='card-title'>Step <span style={{fontSize:18}}>4</span></p>
              <p className='card-body'>Get Delivery</p>
              <p>Hurrayy! &#127881; . Here's the delivery. Our delivery partners try to deliver you at the earliest by following all the safety precautions.</p>
            </div>
            <div className='bike'></div>
         </div>
         </div>
        </>
    )
}

export default About;