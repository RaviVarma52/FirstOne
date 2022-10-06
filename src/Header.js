import { Link } from "react-router-dom";
import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
        <h2 style={{fontSize:30,marginTop:15}}><Link to={`/`}>Sai's Space</Link></h2>
        <input type="text" style={{fontFamily:"FontAwesome"}} placeholder="&#xF002; Search..."></input>
        <div className="headerRight">
          <h2><Link to={`/about`}>About</Link></h2>
          <h2> <Link to={`/contactUs`}>Contact</Link> </h2>
          <h2><Link>Products</Link></h2>
          <h2><Link><i className="fa fa-user-circle-o"></i></Link></h2>
        </div>
    </div>
    )
}

export default Header;