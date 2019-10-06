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
                    <li><NavLink to="/discover" exact className="Tab" activeStyle={{color: "#428BCA"}}>Discover</NavLink></li>
                    <li><NavLink to="/analytics" exact className="Tab" activeStyle={{color: "#428BCA"}}>Analytics</NavLink></li>
                    <li><NavLink to="/search" exact className="Tab" activeStyle={{color: "#428BCA"}}>Search</NavLink></li>
                    <li><NavLink to='/account' exact className='btn btn-floating blue'>AH</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;