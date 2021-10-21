import React, { useEffect, useState } from 'react';
import { Container } from './styles.js';
import Placeholder from '../../assets/images/placeholder.jpg';

import { CardContent } from '@material-ui/core';
import { Card, Grid } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import axios from 'axios';

function CardAlunoFeedback(props) {

  const [avatar, setAvatar] = useState(Placeholder);
  console.log(props.id);

  async function loadAvatar() {
    const config = { headers: { userid: props.id } };
    await axios.get(`${process.env.REACT_APP_URL}/user/upload/avatar`, config).then(res => {
      setAvatar(res.data)
    }).catch(err => { });
  }


  useEffect(() => {
    loadAvatar();
  }, []);

  return (
    <Container>
      <Card className="cardContainer">
        <CardContent style={{ paddingBottom: 0 }}>
          <Grid container spacing={4}>
            <Grid item container md={4} className="imgCustomContainer">
              <img src={avatar || Placeholder} alt="coming soon" />
            </Grid>
            <Grid item container md={8} alignItems="baseline" style={{ minWidth: '80%' }}>
              <Grid item container direction="column">
                <h1>{props.name} {props.lastName}</h1>
                <p className="professor">{props.description}</p>
              </Grid>
              <Grid item container justifyContent="flex-end">
                <span>
                  <StarBorderIcon fontSize="large" />
                  <p className="nota">{parseFloat(props.grade).toFixed(1)}</p>
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