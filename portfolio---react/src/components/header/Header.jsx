import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Rijo M P</h1>
        <h5 className="text-light">Full-stack Developer</h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          Contacts !
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
