import React from "react";
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <NavLink to="/"><img src={require("./logoWithText.png")} alt="Novus" className="left feedLogo" width="300px"></img></NavLink>
            </div>
            <div>    
                <ul className="right">
                    <li><NavLink to="/discover" className="Tab">Discover</NavLink></li>
                    <li><NavLink to="/analytics" className="Tab">Analytics</NavLink></li>
                    <li><NavLink to="/search" className="Tab">Search</NavLink></li>
                    <li><NavLink to='/account' className='btn btn-floating blue'>AH</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;