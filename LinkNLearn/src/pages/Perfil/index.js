import React from 'react';
import { Container, Section } from './style.js';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CardCurso from '../../components/CardCurso/index.js';


function Perfil(props) {

  return (
    <Container>
      <Header />
      {
        props.location.state === 'aluno' ?
          <main className="mainAluno">
            <header>
              <h1>Meu Perfil</h1>
              <Grid container justifyContent="center" spacing={3}>
                <Grid item>
                  <Button color="primary" variant="contained">Meus dados</Button>
                </Grid>
                <Grid item>
                  <Button color="primary" variant="contained">Meus cursos</Button>
                </Grid>
                <Grid item>
                  <Link to='/'>
                    <Button color="primary" variant="contained">Log out</Button>
                  </Link>
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
          <main className="mainProf">
            <h1>main prof</h1>
          </main>
      }

      <Footer />
    </Container>
  );
}

export default Perfil;