import React,{Component} from "react";
import agoralogo from "./images/agoralogo.png";
import "./index.css";

class Navbar extends Component{

render(){
	return(
		<nav> 
    <div className="header">
      <div className="logoBtn">
      <img className="agora-logo" src={agoralogo} alt="agoralogo"></img>
              <div className="agora-text">AGORA </div>{" "}
              <div className="sm-text"> Student Marketplace</div>

                    <div className="btn">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    
                    </div>
                </div>
                </div>
              
              
              <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Register</a></li>
              <li><a href="#">Sign In</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact Us</a></li>

              </ul>
            
               </nav>
               
	)
}

}

export default Navbar;