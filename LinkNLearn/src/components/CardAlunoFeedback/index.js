import React from 'react';
import { Container } from './styles.js';
import Aluno1 from '../../assets/images/aluno1.png';

import { CardContent } from '@material-ui/core';
import { Card, Grid } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';

function CardAlunoFeedback() {

  return (
    <Container>
      <Card className="cardContainer">
        <CardContent style={{ paddingBottom: 0 }}>
          <Grid container spacing={4}>
            <Grid item container md={4} className="imgCustomContainer">
              <img src={Aluno1} alt="coming soon" />
            </Grid>
            <Grid item container md={8} alignItems="baseline" style={{minWidth: '80%'}}>
              <Grid item container direction="column">
                <h1>Curso muito bom!</h1>
                <p className="professor">Professor atencioso e tirou minhas dúvidas</p>
              </Grid>
              <Grid item container justifyContent="flex-end">
                <span>
                  <StarBorderIcon fontSize="large"/>
                  <p className="nota">4.5</p>
                </span>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  )
}

export default CardAlunoFeedback;