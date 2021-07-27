import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import './style.css';

import CopyrightIcon from '@material-ui/icons/Copyright';
import { Grid } from '@material-ui/core';


function Footer() {
  return (
    <footer className="footer">
      <Grid container alignItems="flex-start" justifyContent="space-between">
        <Grid item container md={2} alignItems="flex-start">
          <img src={Logo} alt="Link & Learn logo" />
        </Grid>
        <Grid item container md={6}>
          <Grid item container md={3} spacing={1} direction="column">
            <Grid item>
              <h2 className="title">Navegação</h2>
            </Grid>
            <Grid item>
              <Link>
                <p className="navigationOptions">Veja todos os cursos</p>
              </Link>
            </Grid>
            <Grid item>
              <Link>
                <p className="navigationOptions">Aluno</p>
              </Link>
            </Grid>
            <Grid item>
              <Link>
                <p className="navigationOptions">Professor</p>
              </Link>
            </Grid>
          </Grid>
          <Grid item container md={9} spacing={1} direction="column">
            <Grid item>
              <h2 className="title">Fale conosco</h2>
            </Grid>
            <Grid item>
              <p className="navigationOptions">link&learn@hotmail.com</p>
            </Grid>
            <Grid item>
              <p className="navigationOptions">Telefone: xxxx-xxxx</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} style={{alignSelf: 'flex-end'}}>
          <span style={{display: 'flex',alignItems: 'center', gap: '.4em', float: 'right', paddingRight: '3em'}}>
            <CopyrightIcon fontSize="small" />
            <p className="navigationOptions">2021 Link&Learn, Inc.</p>
          </span>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;