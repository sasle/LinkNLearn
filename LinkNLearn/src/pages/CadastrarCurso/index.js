import React, { useCallback, useEffect, useState } from 'react';
import { Container, Section } from './style.js';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Button, Dialog, DialogContent, DialogTitle, FormControl, Grid, InputLabel, MenuItem, Select, Snackbar, TextField } from '@material-ui/core';

import { Link, useHistory } from 'react-router-dom';
import Placeholder from '../../assets/images/placeholder.jpg';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { DatePicker, LocalizationProvider } from '@mui/lab';


function CadastrarCurso() {

  const history = useHistory();
  const [openEmenta, setOpenEmenta] = useState(false);
  const [openEmentaFinish, setOpenEmentaFinish] = useState(false);
  const [openRequisitos, setOpenRequisitos] = useState(false);
  const [openRequisitosFinish, setOpenRequisitosFinish] = useState(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [level, setLevel] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [finishdate, setFinishDate] = useState(new Date());
  const [period, setPeriod] = useState('');
  const [classdate, setClassDate] = useState('');
  const [maxStudents, setMaxStudents] = useState(0);
  const [price, setPrice] = useState(0);
  const [platform, setPlatform] = useState('');
  const [logoCourse, setLogoCourse] = useState('logo.png');
  const [hours, setHours] = useState("");

  const [openSnack, setOpenSnack] = useState(false);

  function handleLogout() {
    localStorage.removeItem('idUser');
    localStorage.removeItem('type');
    localStorage.removeItem('token');
    history.push('/');
  }

  async function postCurso(e) {
    e.preventDefault();
    //ta dando erro -> insert or update on table "courses" violates foreign key constraint "FK_c9ae211023098e9b7bb44f5b473"
    try {
      await axios.post(`${process.env.REACT_APP_URL}/courses/create`, {
        idTeacher: "26538c42-dffe-429f-bde6-5f4902489179",
        title: title,
        description: description,
        level: level,
        startDate: startDate,
        finishDate: finishdate,
        period: period,
        classDate: classdate,
        maxStudent: parseInt(maxStudents),
        price: parseFloat(price),
        platform: platform,
        logoCourse: logoCourse,
        hours: hours
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })

      setOpenSnack(true);
    }
    catch (err) {
    }
  }

  return (
    <Container>
      <Header />
      <main className="mainAluno">
        <header>
          <h1>Cadastrar Curso</h1>
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
          <form>
            <Grid container spacing={5} className="grid">
              <Grid item>
                <TextField label="Nome do curso" required onChange={e => setTitle(e.target.value)} />
              </Grid>
              <Grid item>
                <TextField label="Valor" type="number" required onChange={e => setPrice(e.target.value)} />
              </Grid>
            </Grid>
            <Grid container spacing={5} className="grid">
              <Grid item>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Data do Curso - Início"
                    onChange={(newValue) => {
                      setStartDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Data do Curso - Fim"
                    onChange={(newValue) => {
                      setFinishDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Grid container spacing={5} className="grid">
              <Grid item>
                <TextField label="Nível" required onChange={e => setLevel(e.target.value)} />
              </Grid>
              <Grid item>
                <TextField label="Plataforma" required onChange={e => setPlatform(e.target.value)} />
              </Grid>
            </Grid>
            <Grid container spacing={5} className="grid">
              <Grid item>
                <TextField label="Descrição" required onChange={e => setDescription(e.target.value)} />
              </Grid>
              <Grid item>
                <TextField label="Período" required onChange={e => setPeriod(e.target.value)} />
              </Grid>
            </Grid>
            <Grid container spacing={5} className="grid">
              <Grid item>
                <TextField label="Total de Horas" type="number" required onChange={e => setHours(e.target.value)} />
              </Grid>
              <Grid item>
                <TextField label="Dias de aula" type="number" required onChange={e => setClassDate(e.target.value)} />
              </Grid>
            </Grid>
            <Grid container spacing={5} className="grid">
              <Grid item>
                <TextField label="Número de vagas" type="number" required onChange={e => setMaxStudents(e.target.value)} />
              </Grid>
              <Grid item>
                <TextField label="Total de horas" type="number" required onChange={e => setHours(e.target.value)} />
              </Grid>
            </Grid>
            <Grid container spacing={5} className="grid">
              <Grid item>
                <Button color="primary" variant="contained" onClick={() => setOpenRequisitos(true)}>Adicionar Requisitos</Button>
              </Grid>
              <Grid item>
                <Button color="primary" variant="contained" onClick={() => setOpenEmenta(true)}>Adicionar Ementa</Button>
              </Grid>
            </Grid>
            <Grid container className="grid">
              <Grid item md={12}>
                <Button color="primary" variant="contained" className="cadastrarCurso" type="submit" onClick={postCurso}>Cadastrar curso</Button>
              </Grid>
            </Grid>
          </form>
        </Section>
      </main>
      <Footer />
      <Dialog open={openEmenta} fullWidth maxWidth="lg">
        <DialogTitle>
          <Grid container justifyContent="flex-end">
            <CloseIcon onClick={() => setOpenEmenta(false)} style={{ cursor: 'pointer' }} />
          </Grid>
        </DialogTitle>
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
          <Button color="primary" variant="contained" style={{ width: '25%', marginTop: '2em' }} onClick={() => setOpenEmentaFinish(true)}>Salvar</Button>
        </DialogContent>
      </Dialog>
      <Dialog open={openEmentaFinish} fullWidth maxWidth="md">
        <DialogTitle>
          <Grid container justifyContent="flex-end">
            <CloseIcon onClick={() => { setOpenEmentaFinish(false) }} style={{ cursor: 'pointer' }} />
          </Grid>
        </DialogTitle>
        <DialogContent style={{ textAlign: 'center', paddingBottom: '3em', overflow: 'hidden' }}>
          <h1 style={{ width: '50%', fontSize: '1.5em', color: '#4c86d3', margin: '0 auto', padding: '2em 0', fontWeight: 600 }}>
            A ementa do curso foi cadastrada com sucesso!
          </h1>
          <Button color="primary" variant="contained" style={{ width: '25%', marginTop: '2em' }} onClick={() => { setOpenEmenta(false); setOpenEmentaFinish(false) }}>Voltar ao cadastro</Button>
        </DialogContent>
      </Dialog>


      <Dialog open={openRequisitos} fullWidth maxWidth="lg">
        <DialogTitle>
          <Grid container justifyContent="flex-end">
            <CloseIcon onClick={() => setOpenRequisitos(false)} style={{ cursor: 'pointer' }} />
          </Grid>
        </DialogTitle>
        <DialogContent style={{ textAlign: 'center', paddingBottom: '3em', overflow: 'hidden' }}>
          <h1 style={{ width: '50%', fontSize: '1.5em', color: '#4c86d3', margin: '0 auto', padding: '2em 0', fontWeight: 600 }}>
            Cadastro dos Requisitos
          </h1>
          <Grid container spacing={3} className="grdizin" justifyContent="center" alignItems="center">
            <Grid item md={9}>
              <TextField label="Digite os requisitos do curso em tópicos" variant="outlined" style={{ width: '100%' }} />
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
          <Button color="primary" variant="contained" style={{ width: '25%', marginTop: '2em' }} onClick={() => setOpenRequisitosFinish(true)}>Salvar</Button>
        </DialogContent>
      </Dialog>
      <Dialog open={openRequisitosFinish} fullWidth maxWidth="md">
        <DialogTitle>
          <Grid container justifyContent="flex-end">
            <CloseIcon onClick={() => { setOpenRequisitosFinish(false) }} style={{ cursor: 'pointer' }} />
          </Grid>
        </DialogTitle>
        <DialogContent style={{ textAlign: 'center', paddingBottom: '3em', overflow: 'hidden' }}>
          <h1 style={{ width: '50%', fontSize: '1.5em', color: '#4c86d3', margin: '0 auto', padding: '2em 0', fontWeight: 600 }}>
            Os requisitos do curso foram cadastrados com sucesso!
          </h1>
          <Button color="primary" variant="contained" style={{ width: '25%', marginTop: '2em' }} onClick={() => { setOpenRequisitos(false); setOpenRequisitosFinish(false) }}>Voltar ao cadastro</Button>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={openSnack}
        autoHideDuration={3000}
        onClose={() => setOpenSnack(false)}
        message="Curso salvo!"
      />
    </Container>
  );
}

export default CadastrarCurso;