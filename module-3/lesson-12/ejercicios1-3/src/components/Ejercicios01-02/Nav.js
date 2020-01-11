import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <div className="clock-nav">
            <Link to="/"><i className="far fa-clock"></i></Link> 
            <Link to="/relax"><i className="far fa-heart"></i></Link>
        </div>
    )
}

export default Nav;