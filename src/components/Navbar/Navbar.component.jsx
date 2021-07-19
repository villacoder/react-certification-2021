import React from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUserCircle } from 'react-icons/fa';

import './Navbar.styles.scss';
import styled from 'styled-components';

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

  &:hover {
    border-bottom: 1px #000 solid;
  }
`;

const Navbar = () => {
  const showNavbar = () => {
    console.log('button has been clicked!!');
  };

  return (
    <Header>
      <div className="navbar">
        <div className="navbar__left-section">
          {/* icon  */}
          <Button onClick={showNavbar}>
            <GiHamburgerMenu size="2em" />
          </Button>
          {/* inpu */}
          <SearchInput type="text" placeholder="Search a video..." />
        </div>
        <div className="navbar__right-section">
          <Button onClick={showNavbar}>
            <FaUserCircle size="3em" />
          </Button>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
