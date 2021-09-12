import React, { useState } from 'react';
import { Container, Section } from './style.js';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Button, Dialog, DialogContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import Sasuke from '../../assets/images/Sasukereup.jpg';

function CadastrarCurso() {

  const history = useHistory();
  const [openEmenta, setOpenEmenta] = useState(false);

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
              <Button color="primary" variant="contained" onClick={() => setOpenEmenta(true)}>Adicionar Ementa</Button>
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
      <Dialog open={openEmenta} fullWidth maxWidth="lg">
        <DialogContent style={{ textAlign: 'center', paddingBottom: '3em', overflow: 'hidden' }}>
          <h1 style={{ width: '50%', fontSize: '1.5em', color: '#4c86d3', margin: '0 auto', padding: '2em 0', fontWeight: 600 }}>
            Cadastro da Ementa
          </h1>
          <Grid container spacing={3} className="grdizin" justifyContent="center" alignItems="center">
            <Grid item md={9}>
              <TextField label="Digite a ementa do curso em tópicos" variant="outlined" style={{ width: '100%' }} />
            </Grid>
            <Grid item md={3}>
              <Button color="primary" variant="contained" style={{ width: '100%' }}>Adicionar</Button>
            </Grid>
          </Grid>
          <div style={{ border: '1px solid black', marginTop: '1em', padding: '1.5em' }}>
            <ul style={{ textAlign: 'left' }}>
              <li style={{ padding: '.7em 0' }}>Tópico 1</li>
              <li style={{ padding: '.7em 0' }}>Tópico 2</li>
              <li style={{ padding: '.7em 0' }}>Tópico 3</li>
            </ul>
          </div>
          <Button color="primary" variant="contained" style={{ width: '25%', marginTop: '2em' }}>Salvar</Button>
        </DialogContent>
      </Dialog>
    </Container>
  );
}

export default CadastrarCurso;