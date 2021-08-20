import React, { useState } from 'react';
import { Container, Section } from './style.js';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Dialog, Grid, DialogTitle, DialogContent } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import CloseIcon from '@material-ui/icons/Close';
import Sasuke from '../../assets/images/Sasukereup.jpg';
import CardAlunoFeedback from '../../components/CardAlunoFeedback/index.js';
import CardCurso from '../../components/CardCurso';

function ProfessorPublicView() {
  const history = useHistory();

  const professorId = useParams();
  console.log(professorId); //usar pra pegar infos no banco

  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Header />
      <main className="main">
        <Grid container justifyContent="center" className="title">
          <ArrowBackIcon onClick={() => history.goBack()} style={{ cursor: 'pointer' }} fontSize="large" />
          {/* Aqui talvez substituir pelo nome do prof */}
          <h1>Perfil Público</h1>
        </Grid>
        <Section>
          <Grid container justifyContent="center">
            <img src={Sasuke} alt="Imagem professor" />
          </Grid>
          <Grid container className="box" direction="column">
            <h1>Informações do professor:</h1>
            <span>
              <p>Leonardo Júnior</p>
              <p>é formado em Ciência da computação pela faculdade X. Tem experiência no ramo de ensino e busca alunos que queiram evoluir. </p>
            </span>
          </Grid>
          <Grid container className="contact">
            <Grid item md={6} container direction="column" alignItems="center">
              <h3>Email</h3>
              <p>leonardo@email.com</p>
            </Grid>
            <Grid item md={6} container direction="column" alignItems="center">
              <h3>Linkedin</h3>
              <p>linkedin.com/in/leonardo-junior</p>
            </Grid>
          </Grid>
          <Grid container className="cursos" direction="column">
            <h1 className="title">Cursos do professor</h1>
            <Grid item container className="box" spacing={3}>
              <Grid item className="card">
                <CardCurso />
              </Grid>
              <Grid item className="card">
                <CardCurso />
              </Grid>
              <Grid item className="card">
                <CardCurso />
              </Grid>
              <Grid item className="card">
                <CardCurso />
              </Grid>
            </Grid>
          </Grid>
        </Section>
      </main>
      <Footer />
    </Container>
  );
}

export default ProfessorPublicView;