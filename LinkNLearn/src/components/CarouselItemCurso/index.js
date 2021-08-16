import React from 'react';
import { Container } from './style.js';
import { Grid } from '@material-ui/core';

import Sasuke from '../../assets/images/Sasukereup.jpg';

import StarBorderIcon from '@material-ui/icons/StarBorder';

function CarouselItemCurso(props) {
  return (
    <Container>
      <Grid container>
        {props.dupla[0] &&
          <Grid item md={5} container className="gridCurso">
            <Grid item container md={8} direction="column" justifyContent="space-between" style={{ padding: '1em' }}>
              <Grid item>
                <h3 className="titulo">{props.dupla[0].titulo}</h3>
                <p>{props.dupla[0].professor}</p>
              </Grid>
              <Grid item container justifyContent="space-between" alignItems="center" className="subinfo">
                <h3>R${props.dupla[0].preco}</h3>
                <span>
                  <StarBorderIcon fontSize="large" />
                  <h3>{props.dupla[0].nota}</h3>
                </span>
              </Grid>
            </Grid>
            <Grid item md={4}>
              <img src={Sasuke} alt="coming soon" />
            </Grid>
          </Grid>
        }
        {
          props.dupla[1] &&
          <Grid item md={5} container className="gridCurso">
            <Grid item container md={8} direction="column" justifyContent="space-between" style={{ padding: '1em' }}>
              <Grid item>
                <h3 className="titulo">{props.dupla[1].titulo}</h3>
                <p>{props.dupla[1].professor}</p>
              </Grid>
              <Grid item container justifyContent="space-between" alignItems="center" className="subinfo">
                <h3>R${props.dupla[1].preco}</h3>
                <span>
                  <StarBorderIcon  fontSize="large"/>
                  <h3>{props.dupla[1].nota}</h3>
                </span>
              </Grid>
            </Grid>
            <Grid item md={4}>
              <img src={Sasuke} alt="coming soon" />
            </Grid>
          </Grid>
        }
      </Grid>
    </Container>
  )
}

export default CarouselItemCurso;