import React from 'react';
import { Container } from './styles.js';
import Placeholder from '../../assets/images/placeholder.jpg';

import { CardContent } from '@material-ui/core';
import { Card, Grid } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useHistory } from 'react-router-dom';

function CardCurso(props) {
  const history = useHistory();
  function handleView() {
    history.push({ pathname: `/curso/${props.info.title}-${props.info.id_course}`, state: { info: props.info } });
  }

  return (
    <Container onClick={handleView}>
      <Card className="cardContainer">
        <CardContent style={{ paddingBottom: 0 }}>
          <Grid container spacing={4}>
            <Grid item container md={8} alignItems="baseline">
              <Grid item container direction="column">
                <h1>{props.info.title}</h1>
                <p>{props.info.resumo}</p>
                <p className="professor">{props.info.teacher.name}</p>
              </Grid>
              <Grid item container justifyContent="space-between">
                <p className="preco">R${props.info.price}</p>
                <p className="nivel">Nível: {props.info.level}</p>
                <span>
                  <StarBorderIcon fontSize="large" />
                  <p className="nota">{props.info.nota}</p>
                </span>
              </Grid>
            </Grid>
            <Grid item container md={4} justifyContent="flex-end" style={{ padding: 0 }}>
              <img src={Placeholder} alt="coming soon" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  )
}

export default CardCurso;