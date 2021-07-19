import React, { useState } from 'react';

import { FaUserCircle } from 'react-icons/fa';

import './Navbar.styles.scss';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
  background-color: aqua;
  padding: 20px;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  margin: 0 3rem;
  cursor: pointer;
`;

const SearchInput = styled.input`
  border: none;
  padding: 10px;
  width: 30%;
  transition: all 0.3s ease;
  &:hover {
    border-bottom: 1px #000 solid;
    width: 50%;
  }
`;

const HamburgerIcon = styled.i`
  font-size: 3rem;
  margin: 0 2rem;
  cursor: pointer;
`;

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);

  const showNavbar = () => {
    setNavigation(!navigation);
  };

  return (
    <Header>
      <nav className="navbar">
        <div className="navbar__left-section">
          {/* sidebar */}
          {/* <input type="checkbox" id="check" />
          <label htmlFor="check">
            <i className="fa fa-bars" id="btn"></i>
            <i className="fa fa-close" id="close"></i>
          </label>
          <div className="sidebar">
            <Link to="/">
              <i className="fa fa-home"></i>Home
            </Link>
          </div> */}
          <HamburgerIcon className="fa fa-bars" id="btn"></HamburgerIcon>

          {/* inpu */}
          <SearchInput type="text" placeholder="Search a video..." />
        </div>
        <div className="navbar__right-section">
          <Button onClick={showNavbar}>
            <FaUserCircle size="2.5em" />
          </Button>
        </div>
      </nav>
    </Header>
  );
};

export default Navbar;
