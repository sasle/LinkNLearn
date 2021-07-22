import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

function Header() {
  return (
    <header className="header">
      <Link to={'/'}>
        <Button variant="contained" color="primary"><HomeIcon />Home</Button>
      </Link>
      <Link to={'/about'}>
        <Button>About Us</Button>
      </Link>
    </header>
  );
}

export default Header;