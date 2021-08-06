import React from 'react';
import { Container } from './styles.js';
import ComingSoon from '../../assets/images/comingsoon.png';

import { CardContent } from '@material-ui/core';
import { Card, Grid } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';

function CardCurso(props) {
  return (
    <Container>
      <Card className="cardContainer">
        <CardContent>
          <Grid container spacing={4}>
            <Grid item container md={10}>
              <Grid item container direction="column">
                <h1>{props.titulo}</h1>
                {props.resumo && <p>{props.resumo}</p>}
                <p className="professor">{props.professor}</p>
              </Grid>
              <Grid item container justifyContent="space-between">
                <p className="preco">R${props.preco}</p>
                {props.nivel && <p className="nivel">Nível: {props.nivel}</p>}
                <span>
                  <StarBorderIcon />
                  <p>{props.nota}</p>
                </span>
              </Grid>
            </Grid>
            <Grid item container md={2} justifyContent="flex-end" style={{ padding: 0 }}>
              <img src={ComingSoon} alt="coming soon" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  )
}

export default CardCurso;