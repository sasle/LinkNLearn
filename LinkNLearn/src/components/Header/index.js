import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to={'/'}>
        <button>Home</button>
      </Link>
      <Link to={'/about'}>
        <button>About Us</button>
      </Link>
    </header>
  );
}

export default Header;