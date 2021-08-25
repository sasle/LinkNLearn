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
            <CardCurso titulo={props.dupla[0].titulo} professor={props.dupla[0].professor} preco={props.dupla[0].preco} nota={props.dupla[0].nota} />
          }
        </Grid>
        <Grid item>
          {
            props.dupla[1] &&
            <CardCurso titulo={props.dupla[1].titulo} professor={props.dupla[1].professor} preco={props.dupla[1].preco} nota={props.dupla[1].nota} />
          }
        </Grid>
      </Grid>
    </Container>
  )
}

export default CarouselItemCurso;