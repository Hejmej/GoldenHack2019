import React from 'react';
import Header from './header';

function Discover() {
    return (
    <div id="discover">
      <Header />
      <div className="containers">

        <div className="square">
          <div className="Overlap">
            <h3>Zebu.io</h3>
            <h3>Waterloo,ON</h3>
            <h3>Technology</h3>
          </div>
        </div>

        <div className="square2">
          <div className="Overlap">
            <h3>Smile.io</h3>
            <h3>Waterloo,ON</h3>
            <h3>E-commerce</h3>
          </div>
        </div>

        <div className="square3">
          <div className="Overlap">
            <h3>North</h3>
            <h3>Kitchener,ON</h3>
            <h3>Technology</h3>
          </div>
        </div>
      </div>

      <div className="containers2"> 

        <div className="square4">
          <div className="Overlap">
            <h3>Viydard</h3>
            <h3>Waterloo,ON</h3>
            <h3>Technology</h3>
          </div>
        </div>

        <div className="square5">
          <div className="Overlap">
            <h3>Kik</h3>
            <h3>Kitchener,ON</h3>
            <h3>Technology</h3>
          </div>
        </div>

        <div className="square6">
          <div className="Overlap">
            <h3>TextNow</h3>
            <h3>Waterloo,ON</h3>
            <h3>Technology</h3>
          </div>
        </div>
      </div>
    </div>
    );
}
  
export default Discover;