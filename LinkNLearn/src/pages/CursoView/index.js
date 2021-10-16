import React, { useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Container, Section } from './style.js';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import { Link, useHistory } from 'react-router-dom';
import { Button, Dialog, Grid, DialogTitle, DialogContent } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import CloseIcon from '@material-ui/icons/Close';
import Placeholder from '../../assets/images/placeholder.jpg';
import CardAlunoFeedback from '../../components/CardAlunoFeedback/index.js';
import axios from 'axios';
import { format, parseISO } from 'date-fns';

function CursoView() {
  const history = useHistory();
  const info = useState(history.location.state.info);
  const [feedbacks, setFeedbacks] = useState([]);

  async function loadFeedbacks() {
    const feedbacksResponse = await axios.post(`${process.env.REACT_APP_URL}/course/listAllFeedback`, {
      course: info.id,
    });

    setFeedbacks(feedbacksResponse.data);
  }

  useEffect(() => {
    loadFeedbacks();
  }, [])

  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Header />
      <main className="main">
        <Grid container justifyContent="center" className="title">
          <ArrowBackIcon onClick={() => history.goBack()} style={{ cursor: 'pointer' }} fontSize="large" />
          {info[0].title}
        </Grid>
        <Section>
          <Grid container direction="column" alignItems="center">
            <Grid item container className="infoBox" justifyContent="space-evenly">
              <Grid item container spacing={3}>
                <Grid item md={3}>
                  <img src={Placeholder} alt="Placeholder" className="sasuke" />
                </Grid>
                <Grid item md={9}>
                  <div style={{ minHeight: '65%', height: '65%' }}>
                    <span className="courseDesc">
                      <p>Descrição do curso</p>
                      <p>{info[0].description}</p>
                    </span>
                  </div>
                </Grid>
              </Grid>
              <Grid item container justifyContent="space-between">
                <Grid item md={3}>
                  <Grid item container direction="column">
                    <Grid item container justifyContent="space-between" style={{ marginTop: '1em', marginBottom: '1em' }}>
                      <p style={{ fontWeight: 700 }}>R$ {info[0].price}</p>
                      <span className="nota">
                        <StarBorderIcon />
                        <p>{info[0].nota}</p>
                      </span>
                    </Grid>
                    <Grid item>
                      <span className="professorInfo">
                        <p>Professor(a):</p>
                        <Link to="/professor/1">
                          <p>{info[0].teacher.name}</p>
                        </Link>
                      </span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item container md={9} spacing={5} justifyContent="space-evenly">
                  <Grid item>
                    <Button color="primary" variant="contained" className="actionButtons" onClick={() => {
                      setOpen(true);
                      let cart = CartContext._currentValue;
                      cart.push(info[0]);
                    }
                    }>Adicionar ao carrinho</Button>
                  </Grid>
                  <Grid item>
                    <Button color="primary" variant="contained" className="actionButtons">Finalizar Compra</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className="infoBox">
              <Grid item className="infosDoCurso">
                <h1>Informações do Curso</h1>
                <span>
                  <p>Data do curso:</p>
                  <p>{format(parseISO(info[0].startDate), 'dd/MM/yyyy')} até {format(parseISO(info[0].finishDate), 'dd/MM/yyyy')}</p>
                </span>
                <span>
                  <p>Plataforma:</p>
                  <p>{info[0].platform}</p>
                </span>
                <span>
                  <p>Período:</p>
                  <p>{info[0].period}</p>
                </span>
                <span>
                  <p>Horário:</p>
                  <p>{info[0].classDate}</p>
                </span>
                <span>
                  <p>Número de vagas:</p>
                  <p>{info[0].maxStudent}</p>
                </span>
                <span>
                  <p>Nível:</p>
                  <p>{info[0].level}</p>
                </span>
                <span>
                  <p>Total de Horas:</p>
                  <p>{info[0].hours}</p>
                </span>
              </Grid>
            </Grid>
            <Grid item className="infoBox">
              <Grid item className="ementa">
                <h1>Ementa</h1>
                <ul>
                  <li>a</li>
                  <li>b</li>
                  <li>c</li>
                  <li>d</li>
                  <li>e</li>
                  <li>f</li>
                  <li>g</li>
                  <li>h</li>
                </ul>
              </Grid>
            </Grid>
            <Grid item className="infoBox">
              <Grid item className="requisitos">
                <h1>Requisitos</h1>
                <h2>Institucional</h2>
                <ul>
                  <li>a</li>
                </ul>
                <h2>Computador</h2>
                <ul>
                  <li>a</li>
                </ul>
              </Grid>
            </Grid>
            <hr />
            <Grid item style={{ width: '50%' }}>
              <Grid item className="feedback">
                <h1 className="title">Feedback do curso</h1>
                {feedbacks.map(feedback => (
                  <CardAlunoFeedback key={feedback.student.id_student} description={feedback.description} grade={feedback.classification} name={feedback.student.name} lastName={feedback.student.last_name} />
                ))}
                {feedbacks.length === 0 && <p>Nenhum feedback</p>}
                <Button color="primary" variant="contained">
                  Ver mais resultados
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Section>
      </main>
      <Footer />
      <Dialog open={open} fullWidth maxWidth="lg">
        <DialogTitle><CloseIcon onClick={() => setOpen(false)} style={{ float: 'right', cursor: 'pointer' }} /></DialogTitle>
        <DialogContent style={{ textAlign: 'center', paddingBottom: '3em' }}>
          <h1 style={{ fontSize: '1.5em', color: '#4c86d3', fontWeight: 700 }}>
            Curso adicionado ao carrinho!
          </h1>
        </DialogContent>
      </Dialog>
    </Container>
  );
}

export default CursoView;