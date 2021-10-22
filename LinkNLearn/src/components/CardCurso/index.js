import React, { useState, useEffect } from 'react';
import { Container } from './styles.js';
import Placeholder from '../../assets/images/placeholder.jpg';

import { CardContent } from '@material-ui/core';
import { Card, Grid } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function CardCurso(props) {
  const history = useHistory();

  const [thumb, setThumb] = useState(Placeholder);
  const [grade, setGrade] = useState(0);

  function handleView() {
    history.push({ pathname: `/curso/${props.info.title}-${props.info.id_course}`, state: { info: props.info } });
  }

  async function loadThumb() {
    const config = { headers: { CourseId: props.info.id_course } };
    await axios.get(`${process.env.REACT_APP_URL}/course/upload/thumbnail`, config).then(res => {
      setThumb(res.data)
    }).catch(err => { });
  }

  async function loadGrade() {
    await axios.post(`${process.env.REACT_APP_URL}/course/listAllFeedback`, {
      course: props.info.id_course
    }).then(res => {
      var sum = 0;
      if (res.data.length > 0) {
        res.data.map(item => {
          sum += parseInt(item.classification);
        })
        setGrade(sum / res.data.length);
      }
    }).catch(err => { });

  }

  useEffect(() => {
    loadThumb();
    loadGrade();
  }, [])

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
                {grade !== 0 &&
                  <span>
                    <StarBorderIcon fontSize="large" />
                    <p className="nota">{grade.toFixed(1)}</p>
                  </span>
                }
              </Grid>
            </Grid>
            <Grid item container md={4} justifyContent="flex-end" style={{ padding: 0 }}>
              <img src={thumb || Placeholder} alt="coming soon" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  )
}

export default CardCurso;