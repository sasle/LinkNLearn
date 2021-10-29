import React from 'react';

import { Card, CardContent } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


function CarouselItemCategoriaDuasLinhas(props) {
  const history = useHistory();

  function handleClick(titulo, cursos) {
    history.push({ pathname: `/categoria?c=${titulo}`, state: { cursos: cursos } });
  }
  return (
    <Grid container alignContent="center" justifyContent="center" spacing={3} style={{ cursor: 'pointer' }}>
      {props.categorias.length >= 1 &&
        props.categorias.map(categoria => (
          <Grid item md={3} key={categoria.id_category} onClick={() => handleClick(categoria.title, categoria.course)}>
            <Card style={{ backgroundColor: '#FFF000', textAlign: 'center', height: '8em' }}>
              <CardContent>
                <p style={{ fontWeight: 700, marginTop: '2.5em' }}>{categoria.title}</p>
              </CardContent>
            </Card>
          </Grid>
        ))
      }
    </Grid>
  )
}

export default CarouselItemCategoriaDuasLinhas;