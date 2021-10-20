import React, { useCallback, useEffect, useState } from 'react';
import { Container, Section } from './style.js';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Dialog, Grid, DialogTitle, DialogContent } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import CloseIcon from '@material-ui/icons/Close';
import Placeholder from '../../assets/images/placeholder.jpg';
import CardAlunoFeedback from '../../components/CardAlunoFeedback/index.js';
import CardCurso from '../../components/CardCurso';
import axios from 'axios';

function ProfessorPublicView() {
  const history = useHistory();

  const params = useParams();

  const [info, setInfo] = useState();
  const [courses, setCourses] = useState();
  const [avatar, setAvatar] = useState(Placeholder);

  const loadProfile = useCallback(async () => {
    const profileResponse = await axios.post(`${process.env.REACT_APP_URL}/teacher/getById`, {
      id_teacher: params.id
    }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    setInfo(profileResponse.data);
  }, [params.id]);

  const loadCourses = useCallback(async () => {
    const coursesResponse = await axios.post(`${process.env.REACT_APP_URL}/teacher/courses`, {
      teacher: params.id
    }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    coursesResponse.data.map(course => {
      course.teacher = (info && info[0]) ? info[0] : {};
      return course;
    });
    setCourses(coursesResponse.data);
  }, [params.id, info]);

  async function loadAvatar() {
    if (info && info[0]) {
      const config = { headers: { userid: info[0].id_teacher } };
      await axios.get(`${process.env.REACT_APP_URL}/user/upload/avatar`, config).then(res => {
        setAvatar(res.data)
      }).catch(err => { });
    }
  }


  useEffect(() => {
    loadProfile();
    loadCourses();
    loadAvatar();
  }, [loadProfile, loadCourses]);


  return (
    <Container>
      <Header />
      <main className="main">
        <Grid container justifyContent="center" className="title">
          <ArrowBackIcon onClick={() => history.goBack()} style={{ cursor: 'pointer' }} fontSize="large" />
          <h1>Perfil de {info && info[0].name} {info && info[0].last_name}</h1>
        </Grid>
        <Section>
          <Grid container justifyContent="center">
            <img src={avatar || Placeholder} alt="Imagem professor" />
          </Grid>
          <Grid container className="box" direction="column">
            <h1>Informações do professor:</h1>
            <span>
              <p>Nome: {info && info[0].name} {info && info[0].last_name}</p>
              <p style={{ marginTop: '1em' }}>Sobre:</p>
              <p style={{ lineBreak: 'anywhere', fontWeight: 500 }}>{(info && info[0].biography) || '-'}</p>
            </span>
          </Grid>
          <Grid container className="contact">
            <Grid item md={6} container direction="column" alignItems="center">
              <h3>Email</h3>
              <p>{(info && info[0].email) || '-'}</p>
            </Grid>
            <Grid item md={6} container direction="column" alignItems="center">
              <h3>Linkedin</h3>
              <a href={(info && info[0].linkedin) || '#'} target="_blank" rel="noopener noreferrer">{(info && info[0].linkedin) || '-'}</a>
            </Grid>
          </Grid>
          <Grid container className="cursos" direction="column">
            <h1 className="title">Cursos do professor</h1>
            <Grid item container className="box" spacing={3}>
              {
                courses && courses.map(course => (
                  <Grid item key={course.id_course} className="card">
                    <CardCurso info={course} />
                  </Grid>
                ))
              }
            </Grid>
          </Grid>
        </Section>
      </main>
      <Footer />
    </Container>
  );
}

export default ProfessorPublicView;