import React from 'react';

function Homepage() {
    return (
      <div>
        <div className="topnav">
          <div className="forStartups noSpace">
            <div className="colorBox">
              <a href="startups">STARTUPS</a>
            </div>
          </div>
          <div className="companyName noSpace">
            <img src="assets/logo.png" id="logo" alt="Logo"/>
            <h1 className="title noSpace"> NOVUS</h1>
          </div>
          <div className="login">
            <button className="myBtn" onClick={function() {document.getElementById("myModal").style.display = "block";}}>Sign Up</button>
            <button className="myBtn" onClick={function() {document.getElementById("myModal").style.display = "block";}}>Login</button>
            <div id="myModal" className="modal">
              <div className="modal-content">
                <span className="close" onClick={function() {document.getElementById("myModal").style.display = "none";}}>×</span>
                <div id="inputNames">
                    <h5>Username</h5>
                    <h5>Password</h5>
                </div>
                <div id="inputBoxes">
                    <input type="text" className="noSpace"></input>
                    <input type="password" className="noSpace"></input>
                </div>
                <a href="homepage">Submit</a>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
            <h1 className="motto">FUEL INNOVATION.</h1>
        </div>
        <div className="back-video noSpace">
          <video width="100%" height="100%" autoPlay loop className="fullscreen-bg__video noSpace">
            <source src="assets/hd0936.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    );
}
  
export default Homepage;