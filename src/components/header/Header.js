import './Header.css';

import logo from "../../assets/svgs/logo.svg";
import { headerLinks } from './data/HeaderLinks';
import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { Container } from '../container/Container';

function Header() {
  const location = useLocation().pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <Container>
    <header>
      <img src={logo} alt="Travlog logo" />
      <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
        <div className='menuLine' />
        <div className='menuLine' />
        <div className='menuLine' />
      </div>
      <nav  className={menuOpen ? '' : 'hide'}>
        {headerLinks.map((linkItem, index) => (
          <a className={location === linkItem.link ? 'activeLink' : ''} key={index} href={linkItem.link}>
            {linkItem.text}
          </a>
        ))}
      </nav>
    </header>
    </Container>
  );
}
export default Header;