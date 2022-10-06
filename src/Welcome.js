import { Link } from "react-router-dom";
import ContactUs from "./ContactUs";
import React from "react";

const Welcome = () => {

    return (
        <div>
            <div className="image">
                <div className='leftSide'>
                        <h1 >Hey Buddy&#128525;</h1>
                        <h2>How are you. Searching for great deals????</h2>
                        <h3>You're at right place &#128521;</h3>
                    <Link to={`/Home`}><button >Go Home</button></Link> 
                </div>
                <div className="minions"/>
            </div>
        </div>
    );
}

export default Welcome;