import React from 'react';

function Startups() {
    return (
      <div>
        <div className="topnav">
          <div className="forStartups noSpace">
            <div className="colorBox">
              <a href="/">INVESTORS</a>
            </div>
          </div>
          <div className="companyName noSpace">
            <img src="assets/logo.png" id="logo" alt="Logo"/>
            <h1 className="title noSpace"> NOVUS</h1>
          </div>
          <div className="login">
            <button className="myBtn">Signup</button>
            <button className="myBtn">Login</button>
            <div id="myModal" className="modal">
              <div className="modal-content">
                <span className="close">×</span>
                <p>Some text in the Modal..</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
            <h1 className="motto">INNOVATION FUELED.</h1>
        </div>
        <div className="back-video noSpace">
          <video width="100%" height="100%" autoPlay loop className="fullscreen-bg__video noSpace">
            <source src="assets/hd0936.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    );
}
  
export default Startups;
