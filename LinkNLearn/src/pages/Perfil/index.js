import React, { useEffect, useState } from 'react';
import { Container, Section } from './style.js';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Button, Card, CardContent, Dialog, DialogContent, DialogTitle, Grid, Tooltip } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import CardCurso from '../../components/CardCurso/index.js';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import TeacherSubheaderButtons from '../../components/TeacherSubheaderButtons/index.js';


function Perfil() {

  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [teacher, setTeacher] = useState({});
  const [allPlans, setAllPlans] = useState([]);
  const [planoEscolhido, setPlanoEscolhido] = useState({});
  const [planoSelecionado, setPlanoSelecionado] = useState({});
  const [courses, setCourses] = useState();
  const [credits, setCredits] = useState(0);

  function handleLogout() {
    localStorage.removeItem('idUser');
    localStorage.removeItem('type');
    localStorage.removeItem('token');
    history.push('/');
  }

  async function loadPlanos() {
    const [allPlans, selectedPlan] = await Promise.all([
      await axios.get(`${process.env.REACT_APP_URL}/plan/listAll`),
      await axios.post(`${process.env.REACT_APP_URL}/teacher/getById`, {
        userId: localStorage.getItem('idUser')
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
    ]);
    setAllPlans(allPlans.data);
    setTeacher(selectedPlan.data[0]);
    setPlanoEscolhido(selectedPlan.data[0].plan);
  }

  async function loadCourses() {
    if (localStorage.getItem('type') === 'aluno') {
      const coursesResponse = await axios.post(`${process.env.REACT_APP_URL}/student/listCourses`, {
        userId: localStorage.getItem('idUser')
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setCourses(coursesResponse.data);
    } else {
      const coursesResponse = await axios.post(`${process.env.REACT_APP_URL}/teacher/courses`, {
        teacher: localStorage.getItem('idUser')
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setCourses(coursesResponse.data);
    }
  }

  async function loadCredits() {
    const creditsResponse = await axios.post(`${process.env.REACT_APP_URL}/student/getById`, {
      id_student: localStorage.getItem('idUser')
    }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    setCredits(creditsResponse.data[0].credit);
  }

  useEffect(() => {
    localStorage.getItem('type') === 'professor' && loadPlanos();
    localStorage.getItem('type') === 'aluno' && loadCredits();
    loadCourses();
  }, [])

  async function handleChangePlan() {
    await axios.put(`${process.env.REACT_APP_URL}/teacher/update-plan`, {
      plan: planoSelecionado.id_plan,
    }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    window.location.reload();
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
                <h1 className="title">Meus Créditos</h1>
                <h2 className="subtitle" style={{ fontSize: '1.7em' }}>{credits}</h2>
              </Grid>
              <Grid container className="cursos" direction="column">
                <h1 className="title">Meus Cursos</h1>
                {courses !== undefined && courses.length >= 1 ?
                  <Grid item container className="box" spacing={3}>
                    {
                      courses.map(course => (
                        <Grid item key={course.course.id_course} className="card">
                          <CardCurso info={course.course} />
                        </Grid>
                      ))
                    }
                  </Grid>
                  :
                  <h2 className="subtitle">Nenhum curso encontrado</h2>
                }
              </Grid>
            </Section>
          </main>
          :
          <main className="mainAluno">
            <header>
              <h1>Meu Perfil</h1>
              <TeacherSubheaderButtons />
            </header>
            <Section>
              <Grid container className="cursos" direction="column">
                <h1 className="title">Meu plano</h1>
                <Grid item container justifyContent="center" spacing={3} className="plansGrid">
                  {
                    allPlans.map(plan => (
                      <Grid key={plan.id_plan} item md={4}>
                        <Card variant="outlined" style={{ backgroundColor: plan.id_plan === planoEscolhido.id_plan ? '#cce2ff' : 'white', cursor: plan.id_plan === planoEscolhido.id_plan ? "auto" : "pointer" }} onClick={() => {
                          if (plan.id_plan !== planoEscolhido.id_plan) {
                            setPlanoSelecionado(plan);
                            setOpen(true);
                          }
                        }}>
                          <CardContent>
                            <h1>{plan.title}</h1>
                            <h3>R${plan.price}</h3>
                            <p>{plan.description}</p>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))
                  }
                </Grid>
                {courses && courses !== undefined && courses.length >= 1 ?
                  <>
                    <h1 className="title">Meus cursos</h1>
                    <Grid item container className="box" spacing={3}>
                      {
                        courses.map(course => (
                          <Grid item key={course.id_course} className="card">
                            <CardCurso info={course} />
                          </Grid>
                        ))
                      }
                    </Grid>
                  </>
                  :
                  <h2 className="subtitle">Nenhum curso encontrado</h2>
                }
              </Grid>
            </Section>
          </main>
      }

      <Footer />
      <Dialog open={open} fullWidth maxWidth="md">
        <DialogTitle>
          <Grid container justifyContent="flex-end">
            <CloseIcon onClick={() => { setOpen(false) }} style={{ cursor: 'pointer' }} />
          </Grid>
        </DialogTitle>
        <DialogContent style={{ textAlign: 'center', paddingBottom: '3em' }}>
          <h1 style={{ fontSize: '1.5em', color: '#4c86d3', padding: '2em 0', fontWeight: 700 }}>
            Confirmação de compra do plano {planoSelecionado.title}
          </h1>
          <Button color="primary" variant="contained" onClick={handleChangePlan} style={{ width: '25%' }}>Comprar</Button>
        </DialogContent>
      </Dialog>
    </Container >
  );
}

export default Perfil;