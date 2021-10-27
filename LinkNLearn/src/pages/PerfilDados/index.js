import React, { useEffect, useState } from 'react';
import { Container, Section } from './style.js';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Button, CircularProgress, FormControl, Grid, InputLabel, Select, Snackbar, TextField } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import Placeholder from '../../assets/images/placeholder.jpg';
import axios from 'axios';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import TeacherSubheaderButtons from '../../components/TeacherSubheaderButtons/index.js';

function PerfilDados() {

  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [openSnack, setOpenSnack] = useState(false);
  const [openSnackPhoto, setOpenSnackPhoto] = useState(false);

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [birth, setBirth] = useState('');
  const [lnkdIn, setLnkdIn] = useState('');
  const [pix, setPix] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [biography, setBiography] = useState('');
  const [pictureProfile, setPictureProfile] = useState('');
  const [src, setSrc] = useState('');

  function handleLogout() {
    localStorage.removeItem('idUser');
    localStorage.removeItem('type');
    localStorage.removeItem('token');
    history.push('/');
  }

  async function loadProfile() {
    setLoading(true);
    if (localStorage.getItem('type') === 'aluno') {
      const profileResponse = await axios.post(`${process.env.REACT_APP_URL}/student/getById`, {
        id_student: localStorage.getItem('idUser')
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setName(profileResponse.data[0].name);
      setLastName(profileResponse.data[0].last_name);
      setEmail(profileResponse.data[0].email);
      setGender(profileResponse.data[0].gender);
      setBirth(profileResponse.data[0].birthDate);
      setEducationLevel(profileResponse.data[0].educationLevel);
      setCpf(profileResponse.data[0].cpf);
    } else {
      const profileResponse = await axios.post(`${process.env.REACT_APP_URL}/teacher/getById`, {
        id_teacher: localStorage.getItem('idUser')
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setName(profileResponse.data[0].name);
      setLastName(profileResponse.data[0].last_name);
      setEmail(profileResponse.data[0].email);
      setPhone(profileResponse.data[0].contact);
      setGender(profileResponse.data[0].gender);
      setBirth(profileResponse.data[0].birthDate);
      setLnkdIn(profileResponse.data[0].linkedin);
      setPix(profileResponse.data[0].pix);
      setPortfolio(profileResponse.data[0].portifolio);
      setCpf(profileResponse.data[0].cpf);
      setPassword(profileResponse.data[0].password);
      setBiography(profileResponse.data[0].biography);
    }
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, userid: localStorage.getItem('idUser') } };
    await axios.get(`${process.env.REACT_APP_URL}/user/upload/avatar`, config).then(res => {
      setPictureProfile(res.data);
    }).catch(err => { console.log(err) });
    setLoading(false);
  }

  async function updateProfile() {
    setLoading(true);
    if (localStorage.getItem('type') === 'aluno') {
      await axios.put(`${process.env.REACT_APP_URL}/student/update`, {
        id_student: localStorage.getItem('idUser'),
        password: password,
        name: name,
        last_name: lastName,
        email: email,
        contact: phone,
        gender: gender,
        birthDate: birth,
        cpf: cpf,
        educationLevel: educationLevel
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, }
      });
    }
    else {
      await axios.put(`${process.env.REACT_APP_URL}/teacher/update`, {
        id_teacher: localStorage.getItem('idUser'),
        password: password,
        biography: biography,
        name: name,
        last_name: lastName,
        email: email,
        contact: phone,
        gender: gender,
        birthDate: birth,
        linkedin: lnkdIn,
        pix: pix,
        portifolio: portfolio,
        cpf: cpf
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
    }
    setLoading(false);
    setOpenSnack(true);
  }

  useEffect(() => {
    loadProfile();
  }, [])

  async function handleImageChange(e) {
    const [file] = e.target.files;
    if (file && file.type === 'image/jpeg') {

      const config = { headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${localStorage.getItem('token')}` } };
      let fd = new FormData();
      fd.append('photo', file);
      setSrc(URL.createObjectURL(file));
      await axios.post(`${process.env.REACT_APP_URL}/user/upload/avatar`, fd, config);
      setOpenSnackPhoto(true);

    } else {
      alert('Formato de arquivo inválido. Por favor insira um arquivo no formato .jpeg');
    }
  }


  return (
    <Container>
      <Header />
      {
        loading ? <CircularProgress size="5em" style={{ marginLeft: '50%' }} /> :
          localStorage.getItem('type') === 'aluno' ?
            <main className="mainProfile">
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
              <form>
                <Section>
                  <Grid container className="grid">
                    <div>
                      <img src={src || pictureProfile || Placeholder} alt="foto de perfil" />
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
                  <Grid container spacing={5} className="grid">
                    <Grid item>
                      <TextField label="Nome" defaultValue={name} onChange={e => setName(e.target.value)} />
                    </Grid>
                    <Grid item>
                      <TextField label="Sobrenome" defaultValue={lastName} onChange={e => setLastName(e.target.value)} />
                    </Grid>
                  </Grid>
                  <Grid container spacing={5} className="grid">
                    <Grid item>
                      <TextField label="Email" type="email" disabled defaultValue={email} onChange={e => setEmail(e.target.value)} style={{ width: '32vw' }} />
                    </Grid>
                  </Grid>
                  <Grid container spacing={5} className="grid">
                    <Grid item>
                      <FormControl>
                        <InputLabel>Sexo</InputLabel>
                        <Select
                          native
                          value={gender}
                          onChange={e => setGender(e.target.value)}
                        >
                          <option aria-label="None" value="" />
                          <option value="Masculino">Masculino</option>
                          <option value="Feminino">Feminino</option>
                          <option value="Neutro">Neutro</option>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          label="Data de Nascimento"
                          inputFormat="dd/MM/yyyy"
                          maxDate={new Date()}
                          value={birth}
                          onChange={(newValue) => {
                            setBirth(newValue);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </Grid>
                  </Grid>
                  <Grid container spacing={5} className="grid">
                    <Grid item>
                      <FormControl>
                        <InputLabel>Nível de Educação</InputLabel>
                        <Select
                          native
                          value={educationLevel}
                          onChange={e => setEducationLevel(e.target.value)}
                        >
                          <option aria-label="None" value="" />
                          <option value="Ensino Fundamental Incompleto">Ensino Fundamental Incompleto</option>
                          <option value="Ensino Fundamental Completo">Ensino Fundamental Completo</option>
                          <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
                          <option value="Ensino Médio Completo">Ensino Médio Completo</option>
                          <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                          <option value="Ensino Superior Completo">Ensino Superior Completo</option>
                          <option value="Pós-Graduação">Pós-Graduação</option>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item>
                      <TextField label="CPF" defaultValue={cpf} onChange={e => setCpf(e.target.value)} />
                    </Grid>
                  </Grid>
                  <Grid container className="grid">
                    <Grid item md={12}>
                      <Button color="primary" variant="contained" onClick={updateProfile} type="submit">Salvar dados</Button>
                    </Grid>
                  </Grid>
                </Section>
              </form>
            </main>
            :
            <main className="mainProfile">
              <header>
                <h1>Meus Dados</h1>
                <TeacherSubheaderButtons />
              </header>
              <form>
                <Section>
                  <Grid container className="grid">
                    <div>
                      <img src={src || pictureProfile || Placeholder} alt="foto de perfil" />
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
                  <Grid container spacing={5} className="grid">
                    <Grid item>
                      <TextField label="Nome" defaultValue={name} onChange={e => setName(e.target.value)} />
                    </Grid>
                    <Grid item>
                      <TextField label="Sobrenome" defaultValue={lastName} onChange={e => setLastName(e.target.value)} />
                    </Grid>
                  </Grid>
                  <Grid container spacing={5} className="grid">
                    <Grid item>
                      <TextField label="Email" type="email" disabled defaultValue={email} onChange={e => setEmail(e.target.value)} />
                    </Grid>
                    <Grid item>
                      <TextField label="Telefone" defaultValue={phone} onChange={e => setPhone(e.target.value)} />
                    </Grid>
                  </Grid>
                  <Grid container spacing={5} className="grid">
                    <Grid item>
                      <FormControl>
                        <InputLabel>Sexo</InputLabel>
                        <Select
                          native
                          value={gender}
                          onChange={e => setGender(e.target.value)}
                        >
                          <option aria-label="None" value="" />
                          <option value="Masculino">Masculino</option>
                          <option value="Feminino">Feminino</option>
                          <option value="Neutro">Neutro</option>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          label="Data de Nascimento"
                          inputFormat="dd/MM/yyyy"
                          maxDate={new Date()}
                          value={birth}
                          onChange={(newValue) => {
                            setBirth(newValue);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </Grid>
                  </Grid>
                  <Grid container spacing={5} className="grid">
                    <Grid item>
                      <TextField label="LinkedIn" defaultValue={lnkdIn} onChange={e => setLnkdIn(e.target.value)} />
                    </Grid>
                    <Grid item>
                      <TextField label="PIX" defaultValue={pix} onChange={e => setPix(e.target.value)} />
                    </Grid>
                  </Grid>
                  <Grid container spacing={5} className="grid">
                    <Grid item>
                      <TextField label="Portfólio (opcional)" defaultValue={portfolio} onChange={e => setPortfolio(e.target.value)} />
                    </Grid>
                    <Grid item>
                      <TextField label="CPF" defaultValue={cpf} onChange={e => setCpf(e.target.value)} />
                    </Grid>
                  </Grid>
                  <Grid container spacing={5} className="grid">
                    <Grid item>
                      <TextField label="Biografia" multiline minRows={2} defaultValue={biography} onChange={e => setBiography(e.target.value)} style={{ width: '32vw' }} />
                    </Grid>
                  </Grid>
                  <Grid container className="grid">
                    <Grid item md={12}>
                      <Button color="primary" variant="contained" onClick={updateProfile} type="submit">Salvar dados</Button>
                    </Grid>
                  </Grid>
                </Section>
              </form>
            </main>
      }

      <Footer />
      <Snackbar
        open={openSnack}
        autoHideDuration={2000}
        onClose={() => setOpenSnack(false)}
        message="Perfil atualizado com sucesso!"
      />
      <Snackbar
        open={openSnackPhoto}
        autoHideDuration={2000}
        onClose={() => setOpenSnackPhoto(false)}
        message="Foto de perfil atualizada com sucesso!"
      />
    </Container >
  );
}

export default PerfilDados;