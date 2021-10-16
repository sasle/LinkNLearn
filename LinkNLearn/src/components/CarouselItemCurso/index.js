import React from 'react';
import { Container } from './style.js';
import { Grid } from '@material-ui/core';

import CardCurso from '../CardCurso';


function CarouselItemCurso(props) {
  return (
    <Container>
      <Grid container spacing={5} justifyContent="center">
        <Grid item>
          {props.dupla[0] &&
            <CardCurso info={props.dupla[0]} />
          }
        </Grid>
        <Grid item>
          {
            props.dupla[1] &&
            <CardCurso info={props.dupla[1]} />
          }
        </Grid>
      </Grid>
    </Container>
  )
}

export default CarouselItemCurso;