import React from "react";
// import ReactDOM from "react-dom/client";
import github from "../images/GitHub Icon.png"
import insta from "../images/Instagram Icon.png"
import twitter from "../images/Twitter Icon (1).png"
function Footer() {
    return (
      <div className="Footer">
        <ul className="Footer__icon--container">
          <li className="item" >
            <a href="https://github.com/Pasify">
              <img src={github} alt="github logo" className="icon"/>
            </a>
          </li>
          <li className="item">
            <a href="https://instagram.com/Pasify_web">
              <img src={insta} alt="instagram logo" className="icon"/>
            </a>
          </li>
          <li className="item">
            <a href="https://twitter.com/Paschalobiora_">
              <img src={twitter} alt="twitter logo" className="icon"/>
            </a>
          </li>
        </ul>
      </div>
    );
}
export default Footer;
