import React from 'react';
import { Container, Section } from './style.js';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import Placeholder from '../../assets/images/placeholder.jpg';

function PerfilDados() {

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
                  <Button color="primary" variant="contained" onClick={handleLogout}>Log out</Button>
                </Grid>
              </Grid>
            </header>
            <Section>
              <div>
                <img src={Placeholder} alt="foto de perfil" />
              </div>
              <Grid container spacing={5} className="grid">
                <Grid item>
                  <TextField label="Nome" />
                </Grid>
                <Grid item>
                  <TextField label="Sobrenome" />
                </Grid>
              </Grid>
              <Grid container spacing={5} className="grid">
                <Grid item>
                  <TextField label="Email" type="email" />
                </Grid>
                <Grid item>
                  <TextField label="Telefone" />
                </Grid>
              </Grid>
              <Grid container spacing={5} className="grid">
                <Grid item>
                  <TextField label="Sexo" />
                </Grid>
                <Grid item>
                  <TextField label="Data de Nascimento" />
                </Grid>
              </Grid>
              <Grid container spacing={5} className="grid">
                <Grid item>
                  <TextField label="RG" />
                </Grid>
                <Grid item>
                  <TextField label="CPF" />
                </Grid>
              </Grid>
              <Grid container className="grid">
                <Grid item md={12}>
                  <Button color="primary" variant="contained">Salvar dados</Button>
                </Grid>
              </Grid>
            </Section>
          </main>
          :
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
                <img src={Placeholder} alt="foto de perfil" />
              </div>
              <Grid container spacing={5} className="grid">
                <Grid item>
                  <TextField label="Nome" />
                </Grid>
                <Grid item>
                  <TextField label="Sobrenome" />
                </Grid>
              </Grid>
              <Grid container spacing={5} className="grid">
                <Grid item>
                  <TextField label="Email" type="email" />
                </Grid>
                <Grid item>
                  <TextField label="Telefone" />
                </Grid>
              </Grid>
              <Grid container spacing={5} className="grid">
                <Grid item>
                  <TextField label="Sexo" />
                </Grid>
                <Grid item>
                  <TextField label="Data de Nascimento" />
                </Grid>
              </Grid>
              <Grid container spacing={5} className="grid">
                <Grid item>
                  <TextField label="LinkedIn" />
                </Grid>
                <Grid item>
                  <TextField label="PIX" />
                </Grid>
              </Grid>
              <Grid container spacing={5} className="grid">
                <Grid item>
                  <TextField label="Portfólio (opcional)" />
                </Grid>
                <Grid item>
                  <TextField label="CPF" />
                </Grid>
              </Grid>
              <Grid container className="grid">
                <Grid item md={12}>
                  <Button color="primary" variant="contained">Salvar dados</Button>
                </Grid>
              </Grid>
            </Section>
          </main>
      }

      <Footer />
    </Container>
  );
}

export default PerfilDados;