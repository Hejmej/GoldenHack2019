import React from "react";
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
            <img src={require("./WhiteLogoSmall.png")} alt="Novus" className="left"></img>
                <ul className="right">
                    <li><NavLink to="/discover">Discover</NavLink></li>
                    <li><NavLink to="/analytics">Analytics</NavLink></li>
                    <li><NavLink to="/search">Search</NavLink></li>
                    <li><NavLink to='/account' className='btn btn-floating blue'>AH</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;