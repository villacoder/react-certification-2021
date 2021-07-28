import React from 'react';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="burger-btn">
        <span />
        <span />
        <span />
      </div>
      <div className="search-bar">
        <i className="fas fa-search" />
        <input type="text" placeholder="Search..." />
      </div>
      <div className="theme-toggle">
        <label htmlFor="theme-toggle-checkbox">
          <input id="theme-toggle-checkbox" type="checkbox" />
          Dark mode
        </label>
      </div>
      <div className="navbar-login-button">
        <span className="fas fa-user" />
      </div>
    </div>
  );
};

export default NavBar;
