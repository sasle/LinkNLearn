import React from 'react';
import { Container, Section } from './style.js';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Button, Grid } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import CardCurso from '../../components/CardCurso/index.js';

function Perfil() {

  const history = useHistory();

  function handleLogout() {
    localStorage.setItem('token', '');
    history.push('/');
  }

  return (
    <Container>
      <Header />
      {
        localStorage.getItem('type') === 'aluno' ?
          <main className="mainAluno">
            <header>
              <h1>Meu Perfil</h1>
              <Grid container justifyContent="center" spacing={3}>
                <Grid item>
                  <Link to='/perfil/dados'>
                    <Button color="primary" variant="contained">Meus dados</Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to='/perfil'>
                    <Button color="primary" variant="contained">Meus cursos</Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Button color="primary" variant="contained" onClick={handleLogout}>Log out</Button>
                </Grid>
              </Grid>
            </header>
            <Section>
              <Grid container className="cursos" direction="column">
                <h1 className="title">Meus Cursos</h1>
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
          :
          <main className="mainProfessor">
            <header>
              <h1>Meu Perfil</h1>
              <Grid container justifyContent="center" spacing={3}>
                <Grid item>
                  <Link to='/perfil/dados'>
                    <Button color="primary" variant="contained">Meus dados</Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to='/perfil'>
                    <Button color="primary" variant="contained">Meus cursos</Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Button color="primary" variant="contained" onClick={handleLogout}>Log out</Button>
                </Grid>
              </Grid>
            </header>
            <Section>
              <Grid container className="cursos" direction="column">
                <h1 className="title">Meus Cursos</h1>
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
      }

      <Footer />
    </Container >
  );
}

export default Perfil;