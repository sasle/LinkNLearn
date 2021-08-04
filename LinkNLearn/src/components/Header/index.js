import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import './style.css';

import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Button, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'


function Header() {
  return (
    <header className="header">
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item container xs={12} sm={4} md={2} alignItems="flex-start">
          <Link to='/'>
            <img src={Logo} alt="Link & Learn logo" />
          </Link>
        </Grid>
        <Grid item xs={false} sm={4} md={5}>
          <TextField
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
              placeholder: 'O que você procura?',
            }}
            className="searchBar"
          />
        </Grid>
        <Grid item container md={3} spacing={5} justifyContent="flex-end">
          <Grid item md={"auto"}>
            <Link to='/nossos-cursos'>
              <p>Veja todos os cursos</p>
            </Link>
          </Grid>
          <Grid item md={"auto"}>
            <Link>
              <ShoppingCartIcon />
            </Link>
          </Grid>
          <Grid item md={"auto"}>
            <span style={{ display: 'flex' }}>
              <Link>
                <p>Aluno</p>
              </Link>
              <p style={{ padding: '0 .3em' }}>|</p>
              <Link to='/home/professor'>
                <p>Professor</p>
              </Link>
            </span>
          </Grid>

        </Grid>
        <Grid item xs={false} sm={4} md={2}>
          <Button color="primary" variant="contained" className="button">Login</Button>
        </Grid>
      </Grid>
    </header>
  );
}

export default Header;