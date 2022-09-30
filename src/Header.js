import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
        <h1><Link to={`/`}>Sai's Space</Link></h1>
        <div className="headerRight">
            <h1>About</h1>
          <h1> <Link to={`/contactUs`}>Contact</Link> </h1>
        </div>
    </div>
    )
}

export default Header;