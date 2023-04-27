import React from "react";
// import ReactDOM from "react-dom/client";
import photo from "../images/pics.jpg"
import mail from "../images/Mail.png"
import linkdin from "../images/linkedin.png"


function Info() {
    return (
      <div className="Info">
        <img src={photo} alt="my photo" className="Info__pic" />

        <div className="info-section">
          <div className="Info__sub">
            <h1 className="info__name">Paschal Obiora</h1>
            <p className="Info__title">Frontend Developer</p>
            <a href="https://paskkal-info.netlify.app" className="Info__link">
              Paskkal.IO
            </a>
          </div>
          <div className="Info__btn">
            <a
              href="mailto:ifesinachiobiora73@gmail.com"
              className="Info__btn--link"
            >
              <button className="Info__btn--mail btn" type="button">
                <img src={mail} className="btn-icon" alt="mail-logo"/>
                <span className="mailbtn">Email</span>
              </button>
            </a>

            <a
              href="https://www.linkedin.com/in/ifesinachi-obiora-b62b7a216"
              className="Info__btn--link"
            >
              <button className="Info__btn--linkdin btn" type="button">
                <img src={linkdin} className="btn-icon" alt="linkedin logo"/>
                <span className="linkdinbtn">LinkedIn</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    );
};
export default Info;