import React, { useCallback, useEffect, useState } from 'react';
import { Container, Section } from './style.js';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Button, Dialog, DialogContent, DialogTitle, Grid, InputLabel, MenuItem, Select, Snackbar, TextField } from '@material-ui/core';

import { Link, useHistory } from 'react-router-dom';
import Placeholder from '../../assets/images/placeholder.jpg';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { DatePicker, LocalizationProvider } from '@mui/lab';


function CadastrarCurso() {

  const history = useHistory();
  const [openEmenta, setOpenEmenta] = useState(false);
  const [openGuia, setOpenGuia] = useState(false);
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
  const [logoCourse, setLogoCourse] = useState('');
  const [hours, setHours] = useState("");
  const [src, setSrc] = useState('');


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
      }).then(async (res) => {
        const config = { headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${localStorage.getItem('token')}`, CourseId: res.data.id_course } };
        await axios.post(`${process.env.REACT_APP_URL}/course/upload/thumbnail`, logoCourse, config);
      }).catch(err => { alert('Houve um erro no upload de imagem. Verifique se ela é do formato .jpeg.') })

      setOpenSnack(true);
    }
    catch (err) {
      alert('Houve um erro. Tente novamente mais tarde.');
    }
  }

  async function handleImageChange(e) {
    const [file] = e.target.files;
    if (file && file.type === 'image/jpeg') {
      let fd = new FormData();
      fd.append('photo', file);
      setSrc(URL.createObjectURL(file));
      setLogoCourse(fd);
    } else {
      alert('Formato de arquivo inválido. Por favor insira um arquivo no formato .jpeg');
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
          <Grid container className="grid">
            <div>
              <img src={src || logoCourse || Placeholder} alt="foto de perfil" />
            </div>
          </Grid>
          <Grid container className="grid">
            <label>
              <input type="file" accept="image/jpeg" style={{ display: 'none' }} onChange={handleImageChange} />
              <Button variant="contained" component="span" color="primary">
                Escolher Foto
              </Button>
            </label>
          </Grid>
          <form onSubmit={postCurso}>
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
                    inputFormat="dd/MM/yyyy"
                    value={startDate}
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
                    inputFormat="dd/MM/yyyy"
                    value={finishdate}
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
                <Button color="primary" className="endButtons" variant="contained" onClick={() => setOpenRequisitos(true)}>Adicionar Requisitos</Button>
              </Grid>
              <Grid item>
                <Button color="primary" className="endButtons" variant="contained" onClick={() => setOpenEmenta(true)}>Adicionar Ementa</Button>
              </Grid>
            </Grid>
            <Grid container spacing={5} className="grid" alignItems="flex-end">
              <Grid item direction="column">
                <p>Guia para criar um curso</p>
                <Button color="primary" className="endButtons" variant="contained" onClick={() => { setOpenGuia(true) }}>Ler guia</Button>
              </Grid>
              <Grid item>
                <Button color="primary" className="endButtons" variant="contained" type="submit">Cadastrar curso</Button>
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
      <Dialog open={openGuia} fullWidth maxWidth="md">
        <DialogContent style={{ textAlign: 'center', paddingBottom: '3em' }}>
          <h1 style={{ width: '50%', fontSize: '1.5em', color: '#4c86d3', margin: '0 auto', padding: '2em 0', fontWeight: 600 }}>
            Guia do curso
          </h1>
          <h2 style={{ textAlign: 'left', fontWeight: 600 }}>1 - Defina seu tópico</h2>
          <p style={{ textAlign: 'left', margin: '1em 0' }}>
            Ao criar seu curso, apresente um conteúdo que possa agregar o conhecimento de seus alunos, seja profissional ou pessoal.
            <br />
            Caso não tenha como foco um material específico do curso, tente começar com conteúdos amplos que atenda um grande número de alunos, assim, aumentando seus ganhos de retorno.
          </p>
          <h2 style={{ textAlign: 'left', fontWeight: 600 }}>2 - Defina seu público-alvo</h2>
          <p style={{ textAlign: 'left', margin: '1em 0' }}>
            Após definir o tópico, é preciso conhecer seu público-alvo. Com isso em mente, você deve identificar aspectos dos alunos como idade, sexo, classe social e ocupação profissional.
            <br />
            Além disso, é interessante focar nos interesses, angústias e desejos dos alunos, quando pensam em comprar um curso.
          </p>
          <h2 style={{ textAlign: 'left', fontWeight: 600 }}>3 - Valide seu curso</h2>
          <p style={{ textAlign: 'left', margin: '1em 0' }}>
            Com o tópico e seu público-alvo definido, é preciso validar seu curso, para garantir maior segurança e confiabilidade.
            <br />
            Nesta etapa, é importante pesquisar se existe demanda para o curso e se ninguém teve a mesma ideia antes, para evitar concorrências e tornar o curso rentável.
          </p>
          <h2 style={{ textAlign: 'left', fontWeight: 600 }}>4 - Crie o conteúdo</h2>
          <p style={{ textAlign: 'left', margin: '1em 0' }}>
            Após validar o curso, monte seu plano de aulas, definindo os materiais que serão ministrados em cada etapa do curso e se possível defina quais dias da semana terão aulas e seus horários, dessa forma os alunos terão tempo de se preparar para as aulas.
          </p>
          <h2 style={{ textAlign: 'left', fontWeight: 600 }}>5 - Defina o preço</h2>
          <p style={{ textAlign: 'left', margin: '1em 0' }}>
            Definir o preço é um aspecto que definirá o sucesso do seu curso. Tendo seu público-alvo em mente, estabeleça um valor que seja compatível com o poder aquisitivo.
            <br />
            Lembre-se que não adianta definir um preço alto, se o seu público não tiver condição de pagar por ele. Da mesma forma que definir um preço abaixo da média, gerando dúvidas quanto a qualidade do conteúdo.
          </p>
          <h2 style={{ textAlign: 'left', fontWeight: 600 }}>6 - Ajude seus clientes a terem sucesso</h2>
          <p style={{ textAlign: 'left', margin: '1em 0' }}>
            Acompanhe seus alunos durante e após a jornada do curso, estar presente para ajudar o aluno mesmo após a finalização do curso, pode gerar confiabilidade e fidelidade do cliente para seus futuros cursos, se tornando aos poucos referência no mercado.
          </p>
          <Button color="primary" variant="contained" style={{ width: '25%', marginTop: '2em' }} onClick={() => setOpenGuia(false)}>Voltar</Button>
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