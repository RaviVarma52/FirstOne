import { Link } from "react-router-dom";
import ContactUs from "./ContactUs";

const Welcome = () => {

    return (
        <div>
         {/* <div className="header">
          <h1>Sai's Space</h1>
          <div className="headerRight">
              <h1>About</h1>
            <h1> <Link to={`/contactUs`}>Contact</Link> </h1>
          </div>
      </div> */}
      <div className="image">
          <div className='leftSide'>
                <h1 >Hey Buddy&#128525;</h1>
                <h2>How are you. Searching for great deals????</h2>
                <h3>You're at right place &#128521;</h3>
                <button>Go Home</button>
          </div>
           <div className="minions"/>
      </div>
        </div>
    );
}

export default Welcome;