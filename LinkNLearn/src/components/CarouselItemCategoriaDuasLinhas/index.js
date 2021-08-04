import React from 'react';

import { Card, CardContent } from '@material-ui/core';
import { Grid } from '@material-ui/core';


function CarouselItemCategoriaDuasLinhas(props) {
  return (
    <Grid container alignContent="center" justifyContent="center" spacing={2}>
      {props.categorias.length >= 1 &&
      //colocar id como key
        props.categorias.map(categoria => (
          <Grid item md={3}>
            <Card style={{ backgroundColor: '#FFF000', textAlign: 'center', height: '8em' }}>
              <CardContent>
                <p style={{fontWeight: 700, marginTop: '2.5em'}}>{categoria.titulo}</p>
              </CardContent>
            </Card>
          </Grid>
        ))
      }
    </Grid>
  )
}

export default CarouselItemCategoriaDuasLinhas;