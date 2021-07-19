import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaHamburger, FaWindowClose, FaHome } from 'react-icons/fa';
import './Navbar.styles.scss';
// import styled from 'styled-components';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const toogleSideBar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaHamburger size="2em" onClick={toogleSideBar} color="#fff" />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <FaWindowClose size="2em" color="#fff" />
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/">
              <FaHome size="2em" />
              <span>Home</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
