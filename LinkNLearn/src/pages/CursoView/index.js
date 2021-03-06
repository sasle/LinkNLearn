import React, { useEffect, useState } from 'react';
import { Container, Section } from './style.js';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import { Link, useHistory } from 'react-router-dom';
import { Button, Dialog, Grid, DialogTitle, DialogContent, TextField, FormControl, RadioGroup, FormControlLabel, Radio, Snackbar, DialogContentText, DialogActions } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import CloseIcon from '@material-ui/icons/Close';
import Placeholder from '../../assets/images/placeholder.jpg';
import CardAlunoFeedback from '../../components/CardAlunoFeedback/index.js';
import axios from 'axios';
import { format, parseISO } from 'date-fns';

function CursoView() {
  const history = useHistory();
  const info = useState(history.location.state.info);

  const [open, setOpen] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const [alreadyPosted, setAlreadyPosted] = useState(false);
  const [openFeedback, setOpenFeedback] = useState(false);
  const [openCancelSuccess, setOpenCancelSuccess] = useState(false);
  const [openCancelCourse, setOpenCancelCourse] = useState(false);
  const [isCanceled, setIsCanceled] = useState(info[0].status === 'Cancelado' ? true : false);

  const [feedbacks, setFeedbacks] = useState([]);
  const [thumb, setThumb] = useState(Placeholder);

  const [feedbackText, setFeedbackText] = useState('');
  const [classificacao, setClassificacao] = useState();
  const [grade, setGrade] = useState(0);


  async function loadFeedbacks() {
    const feedbacksResponse = await axios.post(`${process.env.REACT_APP_URL}/course/listAllFeedback`, {
      course: info[0].id_course,
    });

    var sum = 0;
    feedbacksResponse.data.map((feedback) => {
      if (feedback.student.id_student === localStorage.getItem('idUser')) {
        setAlreadyPosted(true);
      }

      sum += parseInt(feedback.classification);
    });

    setFeedbacks(feedbacksResponse.data);
    setGrade(sum / feedbacksResponse.data.length);
  }

  async function loadThumb() {
    const config = { headers: { CourseId: info[0].id_course } };
    await axios.get(`${process.env.REACT_APP_URL}/course/upload/thumbnail`, config).then(res => {
      setThumb(res.data)
    }).catch(err => { });
  }

  useEffect(() => {
    loadFeedbacks();
    loadThumb()
  }, [])

  async function handleFeedbackSubmit() {
    const feedback = {
      course: info[0].id_course,
      classification: classificacao,
      description: feedbackText
    }

    await axios.post(`${process.env.REACT_APP_URL}/course/feedback`, feedback, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    loadFeedbacks();
    setOpenFeedback(false);
    setOpenSnack(true);
  }

  async function handleCancelCourse() {
    await axios.put(`${process.env.REACT_APP_URL}/courses/update`, {
      id_course: info[0].id_course,
      id_teacher: info[0].id_teacher,
      status: "Cancelado",
    },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
    setOpenCancelCourse(false);
    setOpenCancelSuccess(true);
    setTimeout(() => {
      history.push('/perfil');
    }, 1500)
  }

  async function handleInsertInCart() {
    await axios.post(`${process.env.REACT_APP_URL}/course/buy/create-cart`, {
      course: info[0].id_course,
    },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
    setOpen(true);
    setTimeout(() => {
      history.push('/carrinho');
    }, 1500)
  }


  return (
    <Container>
      <Header />
      <main className="main">
        <Grid container justifyContent="center" className="title" alignItems="center">
          <ArrowBackIcon onClick={() => history.goBack()} style={{ cursor: 'pointer' }} fontSize="large" />
          <span style={{ display: 'flex', gap: '0.5em' }}>
            {info[0].title}
            {isCanceled && <p style={{ color: "red", fontStyle: "italic", fontWeight: 400 }}>(cancelado)</p>}
          </span>
        </Grid>
        <Section>
          <Grid container direction="column" alignItems="center">
            <Grid item container className="infoBox" justifyContent="space-evenly">
              <Grid item container spacing={3}>
                <Grid item md={3}>
                  <img src={thumb || Placeholder} alt="Placeholder" className="sasuke" />
                </Grid>
                <Grid item md={9}>
                  <div style={{ minHeight: '65%', height: '65%' }}>
                    <span className="courseDesc">
                      <p>Descri????o do curso</p>
                      {isCanceled && <p className="canceled">Este curso foi cancelado. Todos os alunos que o haviam comprado foram reembolsados com cr??ditos.</p>}
                      <p>{info[0].description}</p>
                    </span>
                  </div>
                </Grid>
              </Grid>
              <Grid item container justifyContent="space-between">
                <Grid item md={3}>
                  <Grid item container direction="column">
                    <Grid item container justifyContent="space-between" style={{ marginTop: '1em', marginBottom: '1em' }}>
                      <p style={{ fontWeight: 700 }}>R$ {info[0].price}</p>
                      {
                        feedbacks.length !== 0 &&
                        <span className="nota">
                          <StarBorderIcon />
                          <p>{grade.toFixed(1)}</p>
                        </span>
                      }
                    </Grid>
                    <Grid item>
                      <span className="professorInfo">
                        <p>Professor(a):</p>
                        <Link to={{ pathname: `/professor/${info[0].teacher.id_teacher}`, state: { info: info[0] } }}>
                          <p>{info[0].teacher.name} {info[0].teacher.last_name}</p>
                        </Link>
                      </span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item container md={9} spacing={5} justifyContent="space-evenly">

                  {
                    !isCanceled &&
                    info[0].teacher.id_teacher === localStorage.getItem('idUser') &&
                    <Grid item md={4}>
                      <Button disabled={isCanceled} color="secondary" variant="contained" className="actionButtons" onClick={() => setOpenCancelCourse(true)}>Cancelar curso</Button>
                    </Grid>
                  }
                  {
                    !isCanceled &&
                    <Grid item md={4}>
                      <Button color="primary" variant="contained" className="actionButtons" onClick={handleInsertInCart}>Adicionar ao carrinho</Button>
                    </Grid>
                  }
                  {
                    !isCanceled &&
                    <Grid item md={4}>
                      <Button color="primary" variant="contained" className="actionButtons" onClick={handleInsertInCart}>Finalizar Compra</Button>
                    </Grid>
                  }
                </Grid>
              </Grid>
            </Grid>
            <Grid item className="infoBox">
              <Grid item className="infosDoCurso">
                <h1>Informa????es do Curso</h1>
                <span>
                  <p>Data do curso:</p>
                  <p>{format(parseISO(info[0].startDate), 'dd/MM/yyyy')} at?? {format(parseISO(info[0].finishDate), 'dd/MM/yyyy')}</p>
                </span>
                <span>
                  <p>Plataforma:</p>
                  <p>{info[0].platform}</p>
                </span>
                <span>
                  <p>Per??odo:</p>
                  <p>{info[0].period}</p>
                </span>
                <span>
                  <p>Hor??rio:</p>
                  <p>{info[0].classDate}</p>
                </span>
                <span>
                  <p>N??mero de vagas:</p>
                  <p>{info[0].maxStudent}</p>
                </span>
                <span>
                  <p>N??vel:</p>
                  <p>{info[0].level}</p>
                </span>
                <span>
                  <p>Total de Horas:</p>
                  <p>{info[0].hours}</p>
                </span>
              </Grid>
            </Grid>
            <hr />
            <Grid item style={{ width: '50%' }}>
              <Grid item className="feedback">
                <h1 className="title">Feedback do curso</h1>
                {feedbacks.map(feedback => (
                  <CardAlunoFeedback key={feedback.student.id_student} id={feedback.student.id_student} description={feedback.description} grade={feedback.classification} name={feedback.student.name} lastName={feedback.student.last_name} />
                ))}
                {feedbacks.length === 0 && <p>Nenhum feedback</p>}
                {
                  !alreadyPosted && localStorage.getItem('idUser') &&
                  <Button color="primary" variant="contained" onClick={() => setOpenFeedback(true)}>
                    Adicionar feedback
                  </Button>
                }
              </Grid>
            </Grid>
          </Grid>
        </Section>
      </main>
      <Footer />
      <Dialog open={open} fullWidth maxWidth="lg">
        <DialogTitle><CloseIcon onClick={() => setOpen(false)} style={{ float: 'right', cursor: 'pointer' }} /></DialogTitle>
        <DialogContent style={{ textAlign: 'center', paddingBottom: '3em' }}>
          <h1 style={{ fontSize: '1.5em', color: '#4c86d3', fontWeight: 700 }}>
            Curso adicionado ao carrinho!
          </h1>
        </DialogContent>
      </Dialog>
      <Dialog open={openFeedback} fullWidth maxWidth="lg">
        <DialogTitle><CloseIcon onClick={() => setOpenFeedback(false)} style={{ float: 'right', cursor: 'pointer' }} /></DialogTitle>
        <DialogContent style={{ textAlign: 'center', paddingBottom: '3em' }}>
          <h1 style={{ fontSize: '1.5em', color: '#4c86d3', fontWeight: 700, marginBottom: "1.2em" }}>Feedback do curso "{info[0].title}"</h1>
          <TextField label="Feedback" multiline minRows={2} onChange={e => setFeedbackText(e.target.value)} style={{ width: '100%', marginBottom: '1.5em' }} />
          <FormControl style={{ width: '100%', alignItems: 'center' }}>
            <label style={{ fontSize: '1.1em', color: '#4c86d3', fontWeight: 700, marginBottom: "0.7em" }}>Classifica????o</label>
            <RadioGroup row aria-label="classificacao" value={classificacao} onClick={e => setClassificacao(e.target.value)} style={{ marginBottom: '2em' }}>
              <FormControlLabel value="1" checked={classificacao > 0} control={<Radio icon={<StarBorderIcon fontSize="large" color="primary" />} checkedIcon={<StarIcon fontSize="large" color="primary" />} />} />
              <FormControlLabel value="2" checked={classificacao > 1} control={<Radio icon={<StarBorderIcon fontSize="large" color="primary" />} checkedIcon={<StarIcon fontSize="large" color="primary" />} />} />
              <FormControlLabel value="3" checked={classificacao > 2} control={<Radio icon={<StarBorderIcon fontSize="large" color="primary" />} checkedIcon={<StarIcon fontSize="large" color="primary" />} />} />
              <FormControlLabel value="4" checked={classificacao > 3} control={<Radio icon={<StarBorderIcon fontSize="large" color="primary" />} checkedIcon={<StarIcon fontSize="large" color="primary" />} />} />
              <FormControlLabel value="5" checked={classificacao > 4} control={<Radio icon={<StarBorderIcon fontSize="large" color="primary" />} checkedIcon={<StarIcon fontSize="large" color="primary" />} />} />
            </RadioGroup>
          </FormControl>
          <Button color="primary" variant="contained" onClick={handleFeedbackSubmit} style={{ width: '25%' }}>
            Enviar
          </Button>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={openSnack}
        autoHideDuration={3000}
        onClose={() => setOpenSnack(false)}
        message="Feedback salvo!"
      />
      <Snackbar
        open={openCancelSuccess}
        autoHideDuration={1500}
        onClose={() => setOpenCancelSuccess(false)}
        message="Curso cancelado com sucesso!"
      />
      <Dialog
        open={openCancelCourse}
        onClose={() => setOpenCancelCourse(false)}
      >
        <DialogTitle>
          Deseja mesmo Cancelar o curso?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Tem certeza de que deseja cancelar o curso? Ao cancelar o curso, todos os alunos que estiverem inscritos no curso ser??o desinscritos e receber??o cr??ditos em compensa????o.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={() => setOpenCancelCourse(false)}>Cancelar</Button>
          <Button color="primary" onClick={handleCancelCourse} autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </Container >
  );
}

export default CursoView;