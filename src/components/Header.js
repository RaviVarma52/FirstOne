import { useState } from "react"
import { Link } from "react-router-dom"
import "../styling/Header.css"
import React from 'react';

const Header = () => {

    const [HamBurgerMenu,setHamBurgerMenu] = useState(false);

    return (
        <div className="header">
            <h1><Link to={`/`}>Sai's Space</Link></h1>
            <div className="headerRight">
                {/* <h1 className="text-5xl font-sans">About</h1> */}
                <h1><Link to={`/about`}>About</Link></h1>
                <h1 className="text-5xl font-sans"> <Link to={`/contactUs`}>Contact</Link> </h1>
            </div>
            <div className="hamBurger" onClick={() => setHamBurgerMenu(!HamBurgerMenu)}>
                <a className="bar"/>
                <a className="bar"/>
                <a className="bar"/>
            </div>
            {
                HamBurgerMenu && <div className="headerHamBurger">
                                    <hr/>
                                    <h2 onClick={() => setHamBurgerMenu(!HamBurgerMenu)}><Link to={`/about`}>About</Link></h2>
                                    <hr/>
                                    <h2 onClick={() => setHamBurgerMenu(!HamBurgerMenu)}> <Link to={`/contactUs`}>Contact</Link> </h2>
                                    <hr/>
                                </div>
            }
        {/* <h2 style={{fontSize:30,marginTop:15}}><Link to={`/`}>Sai's Space</Link></h2> */}
        {/* <input type="text" style={{fontFamily:"FontAwesome"}} placeholder="&#xF002; Search..."></input> */}
        {/* <div className="headerRight"> */}
          {/* <h2><Link to={`/about`}>About</Link></h2> */}
          {/* <h2> <Link to={`/contactUs`}>Contact</Link> </h2> */}
          {/* <h2><Link>Products</Link></h2> */}
          {/* <h2><Link><i className="fa fa-user-circle-o"></i></Link></h2> */}
        </div>

    // </div>
    )
}

export default Header;