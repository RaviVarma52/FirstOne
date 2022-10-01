import { useState } from "react"
import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {

    const [HamBurgerMenu,setHamBurgerMenu] = useState(false);

    return (
        <div className="header">
            <h1><Link to={`/`}>Sai's Space</Link></h1>
            <div className="headerRight">
                <h1 className="text-5xl font-sans">About</h1>
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
                                    <h2 onClick={() => setHamBurgerMenu(!HamBurgerMenu)}>About</h2>
                                    <hr/>
                                    <h2 onClick={() => setHamBurgerMenu(!HamBurgerMenu)}> <Link to={`/contactUs`}>Contact</Link> </h2>
                                    <hr/>
                                </div>
            }
        </div>

    
    )
}

export default Header;