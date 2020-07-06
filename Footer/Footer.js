import React, { Component } from 'react'
import fb from './fb.PNG';
import insta from './insta.PNG';
import twitter from './twitter.PNG';
import linked from './linked.PNG'
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="main">
                <div className="footer">
                    <h1 className="logoo">LINEUPX</h1>


                    <div className="inner-footer">

                        <div className="footer-items">
                            <h4>Company</h4>
                            <div className="border">
                                <ul>
                                    <a href="#" style={{textDecoration:"none", color: "white"}}><li style={{listStyle: "none", textDecoration: "none", margin: "8px"}}>About Us</li></a>
                                    <a href="#" style={{textDecoration:"none", color: "white"}}><li style={{listStyle: "none", textDecoration: "none", margin: "8px"}}>Contact Us</li></a>
                                    <a href="#" style={{textDecoration:"none", color: "white"}}><li style={{listStyle: "none", textDecoration: "none", margin: "8px"}}>Request a Demo</li></a>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="footer-items">
                            <h4>Customer Support</h4>
                            <div className="border">
                                <ul>
                                    <a href="#" style={{textDecoration:"none", color: "white"}}><li style={{listStyle: "none", textDecoration: "none", margin: "8px"}}>Privacy</li></a>
                                    <a href="#" style={{textDecoration:"none", color: "white"}}><li style={{listStyle: "none", textDecoration: "none", margin: "8px"}}>Terms and Condition</li></a>
                                    <a href="#" style={{textDecoration:"none", color: "white"}}><li style={{listStyle: "none", textDecoration: "none", margin: "8px"}}>Third Parameter</li></a>
                                </ul>
                            </div>
                        </div> 
                    </div>


                    <div className="buttons">
                        <button className="get">Get Started</button>
                        <button className="login">Login</button>
                    </div>

                </div> 
                <div className="footer-bottom">
                    <div style={{marginLeft: "50px"}}>
                        &copy;LINEUPX TECHNOLOGY PRIVATE LIMITED
                    </div>
                    <div>
                        <ul className="social">
                            <li  style={{listStyle: "none", textDecoration: "none", margin: "8px"}}><a><img src={fb} /></a></li>
                            <li style={{listStyle: "none", textDecoration: "none", margin: "8px"}}><a><img src={insta} /></a></li>
                            <li style={{listStyle: "none", textDecoration: "none", margin: "8px"}}><a><img src={twitter} /></a></li>
                            <li style={{listStyle: "none", textDecoration: "none", margin: "8px"}}><a><img src={linked} /></a></li>
                        </ul>
                    </div>
 
                </div>
            </div>   
        )
    }
}

export default Footer;
