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
import TeacherSubheaderButtons from '../../components/TeacherSubheaderButtons/index.js';


function CadastrarCurso() {

  const history = useHistory();
  const [openGuia, setOpenGuia] = useState(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [level, setLevel] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [finishdate, setFinishDate] = useState(new Date());
  const [period, setPeriod] = useState('');
  const [classdate, setClassDate] = useState('');
  const [minStudents, setMinStudents] = useState(0);
  const [maxStudents, setMaxStudents] = useState(0);
  const [price, setPrice] = useState(0);
  const [platform, setPlatform] = useState('');
  const [link, setLink] = useState('');
  const [logoCourse, setLogoCourse] = useState('');
  const [hours, setHours] = useState("");
  const [src, setSrc] = useState('');

  const [openSnack, setOpenSnack] = useState(false);

  async function postCurso(e) {
    e.preventDefault();
    if (maxStudents < minStudents) {
      alert('O número máximo de estudantes não pode ser menor que o número mínimo.');
    } else
      if (logoCourse === '') {
        alert('Por favor insira uma imagem para o curso.');
      } else {
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
            minStudents: parseInt(minStudents),
            maxStudent: parseInt(maxStudents),
            price: parseFloat(price),
            platform: platform,
            link: link,
            logoCourse: logoCourse,
            hours: hours
          }, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
          }).then(async (res) => {
            const config = { headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${localStorage.getItem('token')}`, CourseId: res.data.id_course } };
            await axios.post(`${process.env.REACT_APP_URL}/course/upload/thumbnail`, logoCourse, config);
          }).catch(err => { alert('Houve um erro no upload de imagem. Verifique se ela é do formato .jpeg.') })

          setOpenSnack(true);
          setTimeout(() => {
            history.push('/perfil');
          }, 500)
        }
        catch (err) {
          alert('Houve um erro. Tente novamente mais tarde.');
        }
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
          <TeacherSubheaderButtons />
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
                    label="Data do curso - início"
                    inputFormat="dd/MM/yyyy"
                    value={startDate}
                    onChange={(newValue) => {
                      setStartDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    minDate={new Date()}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Data do curso - fim"
                    inputFormat="dd/MM/yyyy"
                    value={finishdate}
                    onChange={(newValue) => {
                      setFinishDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    minDate={startDate}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Grid container spacing={5} className="grid">
              <Grid item>
                <FormControl>
                  <InputLabel>Nível</InputLabel>
                  <Select
                    native
                    value={level}
                    onChange={e => setLevel(e.target.value)}
                  >
                    <option aria-label="None" value="" />
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl>
                  <InputLabel>Plataforma</InputLabel>
                  <Select
                    native
                    value={platform}
                    onChange={e => setPlatform(e.target.value)}
                  >
                    <option aria-label="None" value="" />
                    <option value="Zoom">Zoom</option>
                    <option value="Teams">Teams</option>
                    <option value="Google Meet">Google Meet</option>
                    <option value="Discord">Discord</option>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={5} className="grid">
              <Grid item>
                <TextField label="Link" required onChange={e => setLink(e.target.value)} style={{ width: '32vw' }} />
              </Grid>
            </Grid>
            <Grid container spacing={5} className="grid">
              <Grid item>
                <TextField label="Descrição" required onChange={e => setDescription(e.target.value)} />
              </Grid>
              <Grid item>
                <FormControl>
                  <InputLabel>Período</InputLabel>
                  <Select
                    native
                    required
                    value={period}
                    onChange={e => setPeriod(e.target.value)}
                  >
                    <option aria-label="None" value="" />
                    <option value="Matutino">Matutino</option>
                    <option value="Vespertino">Vespertino</option>
                    <option value="Noturno">Noturno</option>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={5} className="grid">
              <Grid item>
                <TextField label="Total de horas" type="number" required onChange={e => setHours(e.target.value)} />
              </Grid>
              <Grid item>
                <TextField label="Dias de aula" type="number" required onChange={e => setClassDate(e.target.value)} />
              </Grid>
            </Grid>
            <Grid container spacing={5} className="grid">
              <Grid item>
                <TextField label="Mínimo de vagas" type="number" required onChange={e => setMinStudents(e.target.value)} />
              </Grid>
              <Grid item>
                <TextField label="Máximo de vagas" type="number" required onChange={e => setMaxStudents(e.target.value)} />
              </Grid>
            </Grid>
            <Grid container spacing={5} className="grid" alignItems="flex-end" direction="column">
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