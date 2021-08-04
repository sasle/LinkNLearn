import React from 'react';
import './style.css'
import { Grid } from '@material-ui/core';

import ComingSoon from '../../assets/images/comingsoon.png';

import StarBorderIcon from '@material-ui/icons/StarBorder';

function CarouselItemCurso(props) {
  return (
    <Grid container>
      {props.dupla[0] &&
        <Grid item md={5} container id="gridCurso">
          <Grid item container md={8} direction="column" justifyContent="space-between" style={{ padding: '1em' }}>
            <Grid item className="tituloProf">
              <h3>{props.dupla[0].titulo}</h3>
              <p className="professor">{props.dupla[0].professor}</p>
            </Grid>
            <Grid item container justifyContent="space-between" alignItems="center">
              <h3>R${props.dupla[0].preco}</h3>
              <span>
                <StarBorderIcon />
                <h3>{props.dupla[0].nota}</h3>
              </span>
            </Grid>
          </Grid>
          <Grid item md={4}>
            <img src={ComingSoon} alt="Coming soon" className="comingsoon" />
          </Grid>
        </Grid>
      }
      {
        props.dupla[1] &&
        <Grid item md={5} container id="gridCurso">
          <Grid item container md={8} direction="column" justifyContent="space-between" style={{ padding: '1em' }}>
            <Grid item className="tituloProf">
              <h3>{props.dupla[1].titulo}</h3>
              <p className="professor">{props.dupla[1].professor}</p>
            </Grid>
            <Grid item container justifyContent="space-between" alignItems="center">
              <h3>R${props.dupla[1].preco}</h3>
              <span>
                <StarBorderIcon />
                <h3>{props.dupla[1].nota}</h3>
              </span>
            </Grid>
          </Grid>
          <Grid item md={4}>
            <img src={ComingSoon} alt="Coming soon" className="comingsoon" />
          </Grid>
        </Grid>
      }
    </Grid>
  )
}

export default CarouselItemCurso;