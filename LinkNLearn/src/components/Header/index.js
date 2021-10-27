import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import Placeholder from '../../assets/images/placeholder.jpg';
import { HeaderComponent } from './style.js';

import { Button, Dialog, Grid, DialogTitle, DialogContent, RadioGroup, FormControlLabel, Radio, Tooltip, IconButton, CircularProgress, Badge, Snackbar, Avatar } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField'
import { ArrowBack, ExitToApp } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';


function Header() {
  const history = useHistory();

  const [cart, setCart] = useState([]);

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [differentPasswords, setDifferentPasswords] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [forgot, setForgot] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState('Enviamos um email com instruções para recuperar sua senha.');
  const [snackBarSeverity, setSnackBarSeverity] = useState('success');

  const [avatar, setAvatar] = useState(Placeholder);
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [hiddenError, setHiddenError] = useState(true);
  const [isLogged] = useState(localStorage.getItem('token') !== '' && localStorage.getItem('token') !== null ? true : false);

  const [searchBarText, setSearchBarText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (searchBarText) {
      history.push(`/cursos?q=${searchBarText}`);
    }
  }

  async function handleLogin(e) {

    e.preventDefault();

    if (forgot) {
      setLoading(true);
      try {
        await axios.post(`${process.env.REACT_APP_URL}/student/forgot-password`, {
          email: email,
        });
        setSnackBarMessage('Enviamos um email com instruções para recuperar sua senha.');
        setSnackBarSeverity('success');
        setLoading(false);
        setForgot(false);
        setOpenSnackBar(true);
      } catch {
        setSnackBarMessage('Não foi possível enviar o email.');
        setSnackBarSeverity('error');
        setOpenSnackBar(true);
      }
    } else {
      if (isNew && confirmPassword !== password) {
        setDifferentPasswords(true);
        return;
      }
      if (!isNew) {
        if (userType === 'aluno') {
          setLoading(true);
          await axios.post(`${process.env.REACT_APP_URL}/student/auth`, {
            email: email,
            password: password
          }).then(response => {
            setLoading(false);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('idUser', response.data.user.id_student);
            localStorage.setItem('type', 'aluno');
            history.push('/perfil');
          }).catch(err => {
            setHiddenError(false);
            setLoading(false);
          });
        } else {
          setLoading(true);
          await axios.post(`${process.env.REACT_APP_URL}/teacher/auth`, {
            email: email,
            password: password
          }).then(response => {
            setLoading(false);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('idUser', response.data.user.id_teacher);
            localStorage.setItem('type', 'professor');
            history.push('/perfil');
          }).catch(err => {
            setHiddenError(false);
            setLoading(false);
          });
        }
      } else {
        if (userType === 'aluno') {
          setLoading(true);
          await axios.post(`${process.env.REACT_APP_URL}/student/create`, {
            name: name,
            last_name: lastName,
            email: email,
            password: password,
            cpf: cpf,
            birthDate: new Date(),
            gender: "",
            pictureProfile: "",
            educationLevel: "",
          }).then(response => {
            setLoading(false);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('type', 'aluno');
            setSnackBarMessage('Sua conta foi criada com sucesso!');
            setSnackBarSeverity('success');
            setOpenSnackBar(true);
            setIsNew(false);
          }).catch(err => {
            setLoading(false);
            setSnackBarMessage('Houve um erro. Tente novamente mais tarde.');
            setSnackBarSeverity('error');
            setOpenSnackBar(true);
          });
        } else {
          setLoading(true);
          await axios.post(`${process.env.REACT_APP_URL}/teacher/create`, {
            name: name,
            last_name: lastName,
            email: email,
            password: password,
            cpf: cpf,
            birthDate: new Date(),
            gender: "",
            pictureProfile: "",
            biography: "",
            linkedin: "",
            portifolio: "",
            contact: "",
            pix: "",
            plan: "1c2cbebc-5783-4d0e-8772-925459b6df1b"
          }).then(response => {
            setLoading(false);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('type', 'professor');
            setSnackBarMessage('Sua conta foi criada com sucesso!');
            setSnackBarSeverity('success');
            setOpenSnackBar(true);
            setIsNew(false);
          }).catch(err => {
            setLoading(false);
            setSnackBarMessage('Houve um erro. Tente novamente mais tarde.');
            setSnackBarSeverity('error');
            setOpenSnackBar(true);
          });
        }
      }
    }
  }

  function handleLogout() {
    localStorage.removeItem('idUser');
    localStorage.removeItem('type');
    localStorage.removeItem('token');
    if (history.location.pathname === '/') {
      window.location.reload();
    } else {
      history.push('/');
    }
  }

  async function loadAvatar() {
    const config = {
      headers: {
        userid: localStorage.getItem('idUser')
      }
    };
    await axios.get(`${process.env.REACT_APP_URL}/user/upload/avatar`, config).then(res => {
      setAvatar(res.data)
    }).catch(err => { });
  }

  async function loadCart() {
    const cartResponse = await axios.post(`${process.env.REACT_APP_URL}/course/buy/listAll`, {
      userId: localStorage.getItem('idUser')
    }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })

    setCart(cartResponse.data.courses);
  }

  useEffect(() => {
    loadCart();
    loadAvatar();
  }, []);

  return (
    <HeaderComponent>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item container xs={12} sm={4} md={2} alignItems="flex-start">
          <Link to='/'>
            <img src={Logo} alt="Link &amp; Learn logo" className="logo" />
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
          {isLogged &&
            <Grid item md={"auto"}>
              <Link to='/carrinho'>
                <Badge badgeContent={cart.length} color="primary">
                  <ShoppingCartIcon />
                </Badge>
              </Link>
            </Grid>
          }
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
                    <Avatar alt="avatar" src={avatar || Placeholder} style={{ width: '100%!important' }} />
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
            <CloseIcon onClick={() => {
              setOpen(false);
              setIsNew(false);
              setForgot(false);
            }} style={{ cursor: 'pointer' }} />
          </Grid>
          {(forgot || isNew) &&
            <ArrowBack style={{ cursor: 'pointer' }} onClick={() => {
              setForgot(false);
              setIsNew(false);
            }} />
          }
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
            {forgot && <p style={{ fontWeight: 500, marginBottom: '.5em' }}>Digite seu email abaixo para recuperar sua senha.</p>}
            <TextField label="Email" variant="outlined" color="primary" required style={{ width: '50%' }} type="email" onChange={e => setEmail(e.target.value)} />
            {isNew && <TextField label="CPF" variant="outlined" color="primary" required style={{ width: '50%' }} onChange={e => setCpf(e.target.value)} />}
            {!forgot && <TextField label="Senha" variant="outlined" color="primary" required style={{ width: '50%' }} type="password" onChange={e => setPassword(e.target.value)}
            />}
            {!hiddenError && <p style={{ color: 'red', fontSize: '1.2em' }}>Email ou senha incorretos</p>}
            {
              isNew &&
              <TextField error={differentPasswords} helperText={differentPasswords && 'As senhas não coincidem.'} label="Confirmar senha" variant="outlined" color="primary" required style={{ width: '50%' }} type="password" onChange={e => setConfirmPassword(e.target.value)} />
            }
            {!forgot &&
              <RadioGroup style={{ width: '50%' }} onChange={e => setUserType(e.target.value)}>
                <FormControlLabel value="aluno" control={<Radio color="primary" />} label="Sou aluno" />
                <FormControlLabel value="professor" control={<Radio color="primary" />} label="Sou professor" />
              </RadioGroup>
            }
            <Grid container direction="column" alignItems="center" style={{ width: '50%', paddingTop: '1em', margin: '0 auto' }}>
              {!isNew
                ?
                <>
                  {
                    !forgot &&
                    <span style={{ fontWeight: 500, color: '#4c86d3', cursor: 'pointer' }} onClick={() => {
                      setForgot(true)
                    }}>Esqueceu a senha?</span>
                  }
                  {
                    !forgot &&
                    <span style={{ display: 'flex', justifyContent: 'center', marginTop: '1em', gap: '5px' }}>
                      <p style={{ fontSize: '.8em', fontWeight: 500 }}>Novo por aqui?</p>
                      <p style={{ fontSize: '.8em', fontWeight: 500, color: '#4c86d3', cursor: 'pointer' }} onClick={() => setIsNew(true)}>Cadastre-se!</p>
                    </span>
                  }
                </>
                :
                <span style={{ display: 'flex', justifyContent: 'center', marginTop: '1em', gap: '5px' }}>
                  <p style={{ fontSize: '.8em', fontWeight: 500 }}>Já tem uma conta?</p>
                  <p style={{ fontSize: '.8em', fontWeight: 500, color: '#4c86d3', cursor: 'pointer' }} onClick={() => {
                    setIsNew(false);
                    setLoading(false);
                  }}>Entrar</p>
                </span>
              }
              <Button color="primary" variant="contained" style={{ width: '100%', margin: '1em 0' }} type="submit">{isNew ? 'CADASTRAR' : forgot ? 'ENVIAR ' : 'ENTRAR'}{loading && <CircularProgress style={{ marginLeft: '1em', color: 'white' }} />}</Button>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
      <Snackbar open={openSnackBar} autoHideDuration={2500} onClose={() => setOpenSnackBar(false)}>
        <Alert onClose={() => setOpenSnackBar(false)} severity={snackBarSeverity} sx={{ width: '100%' }}>
          {snackBarMessage}
        </Alert>
      </Snackbar>
    </HeaderComponent >
  );
}

export default Header;