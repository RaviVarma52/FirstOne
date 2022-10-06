import "./ContactUs.css";
import React from 'react';
import styled from 'styled-components'

const ContactUs = () => {
    const MainContainer = styled.div`

    display: "flex" ;
    align-items:center;
    flex-direction:column;
    height:70vh;
    width:70vw;
    background: linear-gradient(
        120deg,
        rgba(255, 255, 255, .25),
        rgba(255, 255, 255, .25), 70%, 
        rgba(255, 255, 255, .25)
      );
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, .25);
    box-shadow:
    inset 4px 4px 5px 0 rgba(255, 255, 255, .25),
    inset -4px -4px 5px 0 rgba(0, 0, 0, 0.125),
    0 0 10px 1px rgba(0, 0, 0, 0.25);
}
backdrop-filter:
blur(15px)
saturate(100%);
    `;
    return (
        <div className="contactUs">
                <div className="mainContainer" >
                    <div className="top">
                            <h1>Anything wrong??</h1>
                    </div>
                    <div className="main">
                        <div className="leftInContactUs">
                                <p>Helloooo</p>
                                <h1>I'm Sai</h1>
                                <h3>I'm here to help you.....</h3>
                                <h3>Share your details we will be back to you</h3>
                                <div className="contactMinions"></div>
                                <div className="minionSmall"></div>
                        </div>
                        <div className="rightInContactUs">
                            <form>
                               <p>Name</p>
                               <input type='text' placeholder="Name..."></input>
                               <p>Mobile</p>
                               <input type='text' placeholder="Mobile..."></input>
                               <p>email</p>
                               <input type='text' placeholder="Email..."></input>
                               <input type='button' value="Send"></input>
                            </form>
                            <div className="drops">
                                <div className="drop drop-1"></div>
                                <div className="drop drop-2"></div>
                                <div className="drop drop-3"></div>
                                <div className="drop drop-4"></div>
                                <div className="drop drop-5"></div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default ContactUs;