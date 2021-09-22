import React, { useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Container, Section } from './style.js';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import { Link, useHistory } from 'react-router-dom';
import { Button, Dialog, Grid, DialogTitle, DialogContent } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import CloseIcon from '@material-ui/icons/Close';
import Sasuke from '../../assets/images/Sasukereup.jpg';
import CardAlunoFeedback from '../../components/CardAlunoFeedback/index.js';

function CursoView() {
  const history = useHistory();
  const [cursoInfo] = useState(history.location.state.cursoInfo);

  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Header />
      <main className="main">
        <Grid container justifyContent="center" className="title">
          <ArrowBackIcon onClick={() => history.goBack()} style={{ cursor: 'pointer' }} fontSize="large" />
          {cursoInfo.titulo}
        </Grid>
        <Section>
          <Grid container direction="column" alignItems="center">
            <Grid item container className="infoBox" justifyContent="space-evenly">
              <Grid item container spacing={3}>
                <Grid item md={3}>
                  <img src={Sasuke} alt="Sasuke" className="sasuke" />
                </Grid>
                <Grid item md={9}>
                  <div style={{ minHeight: '65%', height: '65%' }}>
                    <span className="courseDesc">
                      <p>Descrição do curso</p>
                      <p>Descrição do curso resumidamente Descrição do curso resumidamente Descrição do curso resumidamente Descrição do curso resumidamente Descrição do curso resumidamente.</p>
                    </span>
                  </div>
                </Grid>
              </Grid>
              <Grid item container justifyContent="space-between">
                <Grid item md={3}>
                  <Grid item container direction="column">
                    <Grid item container justifyContent="space-between" style={{ marginTop: '1em', marginBottom: '1em' }}>
                      <p style={{ fontWeight: 700 }}>R$ 00,00</p>
                      <span className="nota">
                        <StarBorderIcon />
                        <p>4.8</p>
                      </span>
                    </Grid>
                    <Grid item>
                      <span className="professorInfo">
                        <p>Professor(a):</p>
                        {/* Dinamizar */}
                        <Link to="/professor/1">
                          <p>Leonardo Junior</p>
                        </Link>
                      </span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={3}>
                  <Button color="primary" variant="contained" className="actionButtons" onClick={() => {
                    setOpen(true);
                    let cart = CartContext._currentValue;
                    cart.push(cursoInfo);
                  }
                  }>Adicionar ao carrinho</Button>
                </Grid>
                <Grid item md={3}>
                  <Button color="primary" variant="contained" className="actionButtons">Finalizar Compra</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className="infoBox">
              <Grid item className="infosDoCurso">
                <h1>Informações do Curso</h1>
                <span>
                  <p>Data do curso:</p>
                  <p>10/09/2021</p>
                </span>
                <span>
                  <p>Plataforma:</p>
                  <p>Zoom</p>
                </span>
                <span>
                  <p>Período:</p>
                  <p>Matutino</p>
                </span>
                <span>
                  <p>Horário:</p>
                  <p>10:00 às 18:00</p>
                </span>
                <span>
                  <p>Número de vagas:</p>
                  <p>10 vagas</p>
                </span>
                <span>
                  <p>Nível:</p>
                  <p>Avançado</p>
                </span>
                <span>
                  <p>Total de Horas:</p>
                  <p>200 horas</p>
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
                <CardAlunoFeedback />
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