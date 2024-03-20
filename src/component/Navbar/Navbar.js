import React, { useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import {
  NavLink,
} from 'react-router-dom';
import './Navbar.css';
import planetLogo from './planet.png';

function Navbar() {
  const [active, setActive] = useState(false); // Use boolean for active state
  const [icon, setIcon] = useState(false); // Use boolean for icon state

  const navToggle = () => {
    setActive(!active);
    setIcon(!icon);
  };

  const hideNav = () => {
    setActive(false);
    setIcon(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      navToggle(); // Call the toggle function when the 'Enter' key is pressed
    }
  };

  return (
    <nav className={active ? 'nav nav--expanded' : 'nav'}>
      <NavLink to="/" className="nav__brand" onKeyPress={handleKeyPress} tabIndex={0} role="button">
        <p className="logo">
          <img src={planetLogo} alt="planet-logo" className="logoImg" />
          <h1 className="title">Space Travelers&apos; Hub</h1>
        </p>
      </NavLink>
      <ul className={active ? 'nav__active' : 'nav__menu'}>
        <li className="nav__item">
          <NavLink to="/" className="navlink-class" onClick={hideNav}>Rockets</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/mission" className="navlink-class" onClick={hideNav}>Missions</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/dragon" className="navlink-class" onClick={hideNav}>Dragons</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/profile" className="navlink-class" onClick={hideNav}>My Profile</NavLink>
        </li>
      </ul>
      <div onClick={navToggle} onKeyPress={handleKeyPress} className={`nav__toggler ${active ? 'active' : ''}`} tabIndex={0} role="button">
        <div className="menugroup">
          <div className={icon ? 'nav__close' : 'menu'} id="nav-close">
            {icon ? <IoClose size={32} color="black" /> : <IoMenu size={32} color="black" />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
