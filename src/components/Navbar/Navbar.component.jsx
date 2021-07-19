import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaHamburger, FaWindowClose, FaHome } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import './Navbar.styles.scss';
// import styled from 'styled-components';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const toogleSideBar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff', size: '2em' }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaHamburger onClick={toogleSideBar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={toogleSideBar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <FaWindowClose />
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/">
                <FaHome />
                <span>Home</span>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
