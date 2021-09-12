import React from 'react';
import { Container, Section } from './style.js';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Button, Card, CardContent, Grid } from '@material-ui/core';
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
                  <Link to='/cadastrar-curso'>
                    <Button color="primary" variant="contained">Cadastrar curso</Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Button color="primary" variant="contained" onClick={handleLogout}>Log out</Button>
                </Grid>
              </Grid>
            </header>
            <Section>
              <Grid container className="cursos" direction="column">
                <h1 className="title">Planos</h1>
                <Grid item container className="box">
                  <h2>Cursos dos planos a partir do Nível 10, serão os primeiros a serem vistos em suas respectivas categorias                 </h2>
                </Grid>
                <Grid item container justifyContent="center" spacing={3} className="plansGrid">
                  <Grid item md={4}>
                    <Card>
                      <CardContent>
                        <h1>Nível 1</h1>
                        <h3>Gratuito</h3>
                        <p>Divulgação de 3 cursos na área de destaque</p>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item md={4}>
                    <Card>
                      <CardContent>
                        <h1>Nível 10</h1>
                        <h3>R$10,00/mês</h3>
                        <p>Divulgue quantos cursos quiser na área de destaque</p>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item md={4}>
                    <Card>
                      <CardContent>
                        <h1>Nível 100</h1>
                        <h3>R$70,00/Ano</h3>
                        <p>Economize R$50,00 e divulgue quantos cursos quiser na área de destaque</p>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
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