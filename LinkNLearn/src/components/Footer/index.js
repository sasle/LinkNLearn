import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { FooterComponent } from './style.js';

import CopyrightIcon from '@material-ui/icons/Copyright';
import { Grid } from '@material-ui/core';


function Footer() {
  return (
    <FooterComponent>
      <Grid container alignItems="flex-start" justifyContent="space-between">
        <Grid item container md={2}>
          <Link to='/'>
            <img src={Logo} alt="Link&amp;Learn logo" />
          </Link>
        </Grid>
        <Grid item container md={6}>
          <Grid item container md={3} spacing={1} direction="column">
            <Grid item>
              <h2 className="title">Navegação</h2>
            </Grid>
            <Grid item>
              <Link to='/nossos-cursos'>
                <p className="navigationOptions">Veja todos os cursos</p>
              </Link>
            </Grid>
            <Grid item>
              <Link to='/'>
                <p className="navigationOptions">Aluno</p>
              </Link>
            </Grid>
            <Grid item>
              <Link to='/professor'>
                <p className="navigationOptions">Professor</p>
              </Link>
            </Grid>
          </Grid>
          <Grid item container md={9} spacing={1} direction="column">
            <Grid item>
              <h2 className="title">Fale conosco</h2>
            </Grid>
            <Grid item>
              <p>linknlearn@gmail.com</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container md={4} justifyContent="flex-end" className="copyrightDiv">
          <span>
            <CopyrightIcon fontSize="small" />
            <p>2021 Link&amp;Learn, Inc.</p>
          </span>
        </Grid>
      </Grid>
    </FooterComponent>
  );
}

export default Footer;