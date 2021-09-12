import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { HeaderComponent } from './style.js';

import { Button, Dialog, Grid, DialogTitle, DialogContent, RadioGroup, FormControlLabel, Radio, Tooltip, IconButton, CircularProgress } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField'
import { AccountCircle, ExitToApp } from '@material-ui/icons';


function Header() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [isNew, setIsNew] = useState(false);

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [hiddenError, setHiddenError] = useState(true);
  const [isLogged] = useState(localStorage.getItem('token') !== '' ? true : false);

  const [searchBarText, setSearchBarText] = useState('');


  function handleSubmit(e) {
    e.preventDefault();
    if (searchBarText) {
      history.push(`/cursos?q=${searchBarText}`);
    }
  }

  async function handleLogin(e) {
    e.preventDefault();

    if (!isNew) {
      if (userType === 'aluno') {
        setLoading(true);
        await axios.post("http://localhost:3333/student/auth", {
          email: email,
          password: password
        }).then(response => {
          setLoading(false);
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('type', 'aluno');
          history.push('/perfil');
        }).catch(err => setHiddenError(false));
      } else {
        setLoading(true);
        await axios.post("http://localhost:3333/teacher/auth", {
          email: email,
          password: password
        }).then(response => {
          setLoading(false);
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('type', 'professor');
          history.push('/perfil');
        }).catch(err => setHiddenError(false));
      }
    } else {
      if (userType === 'aluno') {
        setLoading(true);
        await axios.post("http://localhost:3333/student/create", {
          name: name,
          last_name: lastName,
          email: email,
          password: password,
          cpf: "",
          birthDate: "",
          gender: "",
          pictureProfile: "",
          educationLevel: "",
        }).then(response => {
          setLoading(false);
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('type', 'aluno');
          history.push('/perfil');
        }).catch();
      } else {
        setLoading(true);
        await axios.post("http://localhost:3333/teacher/create", {
          name: name,
          last_name: lastName,
          email: email,
          password: password,
          cpf: "",
          birthDate: "",
          gender: "",
          pictureProfile: "",
          biography: "",
          linkedin: "",
          portifolio: "",
          contact: "",
          pix: "",
          plan: ""
        }).then(response => {
          setLoading(false);
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('type', 'aluno');
          history.push('/perfil');
        }).catch();
      }
    }

  }

  function handleLogout() {
    localStorage.setItem('token', '');
    history.push('/');
  }

  return (
    <HeaderComponent>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item container xs={12} sm={4} md={2} alignItems="flex-start">
          <Link to='/'>
            <img src={Logo} alt="Link & Learn logo" />
          </Link>
        </Grid>
        <Grid item xs={false} sm={4} md={5}>
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
                placeholder: 'O que você procura?',
              }}
              value={searchBarText}
              onInput={e => setSearchBarText(e.target.value)}
              className="input"
            />
          </form>
        </Grid>
        <Grid item container md={3} spacing={5} justifyContent="flex-end">
          <Grid item md={"auto"}>
            <Link to='/nossos-cursos'>
              <p>Veja todos os cursos</p>
            </Link>
          </Grid>
          <Grid item md={"auto"}>
            <Link to='/carrinho'>
              <ShoppingCartIcon />
            </Link>
          </Grid>
          <Grid item md={"auto"}>
            <span style={{ display: 'flex' }}>
              <Link to='/'>
                <p>Aluno</p>
              </Link>
              <p style={{ padding: '0 .3em' }}>|</p>
              <Link to='/professor'>
                <p>Professor</p>
              </Link>
            </span>
          </Grid>

        </Grid>
        <Grid item xs={false} sm={4} md={2}>
          {!isLogged &&
            <Button color="primary" variant="contained" onClick={() => setOpen(true)}>Login</Button>
          }
          {isLogged &&
            <Grid container justifyContent="center" spacing={3}>
              <Grid item>
                <Tooltip title="Perfil">
                  <IconButton color="primary" onClick={() => history.push('/perfil')}>
                    <AccountCircle />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title="Sair">
                  <IconButton color="primary" onClick={handleLogout}>
                    <ExitToApp />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          }
        </Grid>
      </Grid>
      <Dialog open={open} fullWidth maxWidth="sm" className="dialog">
        <DialogTitle>
          <Grid container justifyContent="flex-end">
            <CloseIcon onClick={() => setOpen(false)} style={{ cursor: 'pointer' }} />
          </Grid>
        </DialogTitle>
        <DialogContent>
          <img src={Logo} alt="Link&amp;Learn logo" style={{ width: '40%', maxWidth: '40%', paddingBottom: '2em', marginLeft: '30%' }} />
          <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em' }} onSubmit={handleLogin}>
            {
              isNew &&
              <>
                <TextField label="Nome" variant="outlined" color="primary" required style={{ width: '50%' }} onChange={e => setName(e.target.value)} />
                <TextField label="Sobrenome" variant="outlined" color="primary" required style={{ width: '50%' }} onChange={e => setLastName(e.target.value)} />
              </>
            }
            <TextField label="Email" variant="outlined" color="primary" required style={{ width: '50%' }} type="email" onChange={e => setEmail(e.target.value)} />
            <TextField label="Senha" variant="outlined" color="primary" required style={{ width: '50%' }} type="password" onChange={e => setPassword(e.target.value)} />
            {!hiddenError && <p style={{ color: 'red', fontSize: '1.2em' }}>Email ou senha incorretos</p>}
            {
              isNew &&
              <TextField label="Confirmar senha" variant="outlined" color="primary" required style={{ width: '50%' }} type="password" />
            }
            <RadioGroup style={{ width: '50%' }} onChange={e => setUserType(e.target.value)}>
              <FormControlLabel value="aluno" control={<Radio color="primary" />} label="Sou aluno" />
              <FormControlLabel value="professor" control={<Radio color="primary" />} label="Sou professor" />
            </RadioGroup>
            <Grid container direction="column" alignItems="center" style={{ width: '50%', paddingTop: '1em', margin: '0 auto' }}>
              <Link to={'/'}>Esqueceu a senha?</Link>
              <span style={{ display: 'flex', justifyContent: 'center', marginTop: '1em', gap: '5px' }}>
                <p style={{ fontSize: '.8em', fontWeight: 500 }}>Novo por aqui?</p>
                <p style={{ fontSize: '.8em', fontWeight: 500, color: '#4c86d3', cursor: 'pointer' }} onClick={() => setIsNew(true)}>Cadastre-se!</p>
              </span>
              <Button color="primary" variant="contained" style={{ width: '100%', margin: '1em 0' }} type="submit">{isNew ? 'CADASTRAR' : 'ENTRAR'}{loading && <CircularProgress style={{ marginLeft: '1em', color: 'white' }} />}</Button>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </HeaderComponent >
  );
}

export default Header;