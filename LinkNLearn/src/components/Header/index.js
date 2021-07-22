import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

function Header() {
  return (
    <header className="header">
      <Link to={'/'}>
        <Button color="primary">Home</Button>
      </Link>
      <Link to={'/about'}>
        <Button>About Us</Button>
      </Link>
    </header>
  );
}

export default Header;