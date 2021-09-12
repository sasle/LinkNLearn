import React from 'react';
import { Container, Section } from './style.js';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import Sasuke from '../../assets/images/Sasukereup.jpg';

function CadastrarCurso() {

  const history = useHistory();

  function handleLogout() {
    localStorage.setItem('token', '');
    history.push('/');
  }

  return (
    <Container>
      <Header />
      <main className="mainAluno">
        <header>
          <h1>Meus Dados</h1>
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
          <div>
            <img src={Sasuke} alt="foto de perfil" />
          </div>
          <Grid container spacing={5} className="grid">
            <Grid item>
              <TextField label="Nome do curso" />
            </Grid>
            <Grid item>
              <TextField label="Valor" />
            </Grid>
          </Grid>
          <Grid container spacing={5} className="grid">
            <Grid item>
              <TextField label="Data do curso - Início" />
            </Grid>
            <Grid item>
              <TextField label="Data do curso - Fim" />
            </Grid>
          </Grid>
          <Grid container spacing={5} className="grid">
            <Grid item>
              <TextField label="Categoria" />
            </Grid>
            <Grid item>
              <TextField label="Plataforma" />
            </Grid>
          </Grid>
          <Grid container spacing={5} className="grid">
            <Grid item>
              <TextField label="Descrição" />
            </Grid>
            <Grid item>
              <TextField label="Período" />
            </Grid>
          </Grid>
          <Grid container spacing={5} className="grid">
            <Grid item>
              <TextField label="Horário" />
            </Grid>
            <Grid item>
              <TextField label="Dias de aula" />
            </Grid>
          </Grid>
          <Grid container spacing={5} className="grid">
            <Grid item>
              <TextField label="Número de vagas" />
            </Grid>
            <Grid item>
              <TextField label="Total de horas" />
            </Grid>
          </Grid>
          <Grid container spacing={5} className="grid">
            <Grid item>
              <Button color="primary" variant="contained">Adicionar Requisitos</Button>
            </Grid>
            <Grid item>
              <Button color="primary" variant="contained">Adicionar Ementa</Button>
            </Grid>
          </Grid>
          <Grid container className="grid">
            <Grid item md={12}>
              <Button color="primary" variant="contained" className="cadastrarCurso">Cadastrar curso</Button>
            </Grid>
          </Grid>
        </Section>
      </main>
      <Footer />
    </Container>
  );
}

export default CadastrarCurso;