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
            <CardCurso id={props.dupla[0].id_course} titulo={props.dupla[0].title} professor={props.dupla[0].teacher.name} preco={props.dupla[0].price} nota={props.dupla[0].nota} />
          }
        </Grid>
        <Grid item>
          {
            props.dupla[1] &&
            <CardCurso id={props.dupla[1].id_course} titulo={props.dupla[1].title} professor={props.dupla[1].teacher.name} preco={props.dupla[1].price} nota={props.dupla[1].nota} />
          }
        </Grid>
      </Grid>
    </Container>
  )
}

export default CarouselItemCurso;