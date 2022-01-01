import React, { useState } from "react";
import { Link } from "react-router-dom";
// import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
// import logo from '../../img/logo.png';
// import * as FaIcons from 'react-icons/fa';
import './nav.css'

const Nav = () => {

//   false is nav bar is normal 
//   true is nav links are in the bars view point 
  const [isMobile, setIsMobile] = useState(false);
  
//   const changeCollapsedNav () => {
//       setIsMobile(!isMobile);
//   }

  return (
    <>
        <nav className="navbar">
            <h3 className="logo">Logo</h3>
            {/* if true nav-links-mobile is the class name  */}
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
                <Link to='/' className="home">
                    Home
                </Link>

                <Link to='/products' className="products">
                    Products
                </Link>

                <Link to='/skills' className="home">
                    Home
                </Link>

                <Link to='/signup' className="home">
                    Home
                </Link>

            </ul>
            <button className="mobile-menu-icon" 
            
            onClick={() => setIsMobile(!isMobile)}>
                {/* if true icon is time if false icon is bars */}
                {isMobile ? 
                ( 
                    <i className="fas fa-times"></i> 
                ) : ( 
                    <i className="fas fa-bars"></i>
                )}
            </button>
        </nav>
    </>
  );
};

export default Nav;
