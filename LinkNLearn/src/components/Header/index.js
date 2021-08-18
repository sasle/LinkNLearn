import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { HeaderComponent } from './style.js';

import { Button, Dialog, Grid, DialogTitle, DialogContent } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField'


function Header() {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [isNew, setIsNew] = useState(false);

  const [searchBarText, setSearchBarText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (searchBarText) {
      history.push(`/cursos?q=${searchBarText}`);
    }
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
            <Link>
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
          <Button color="primary" variant="contained" onClick={() => setOpen(true)}>Login</Button>
        </Grid>
      </Grid>
      <Dialog open={open} fullWidth maxWidth="sm" className="dialog">
        <DialogTitle>
          <Grid container alignItems="center" justifyContent="space-between">
            <p style={{ fontWeight: 700, color: '#4c86d3' }}>{history.location.pathname === '/' ? 'Aluno' : 'Professor'}</p>
            <CloseIcon onClick={() => setOpen(false)} style={{ float: 'right', cursor: 'pointer' }} />
          </Grid>
        </DialogTitle>
        <DialogContent>
          <img src={Logo} alt="Link&amp;Learn logo" style={{width: '40%', maxWidth: '40%', paddingBottom: '2em', marginLeft: '30%'}}/>
          <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em' }}>
            <TextField label="Email" variant="outlined" color="primary" required style={{ width: '50%' }} type="email" />
            <TextField label="Senha" variant="outlined" color="primary" required style={{ width: '50%' }} type="password" />
            {
              isNew &&
              <TextField label="Confirmar senha" variant="outlined" color="primary" required style={{ width: '50%' }} type="password" />
            }
            <Grid container direction="column" alignItems="center" style={{ width: '50%', paddingTop: '1em', margin: '0 auto' }}>
              <Link to={'/'}>Esqueceu a senha?</Link>
              <span style={{ display: 'flex', justifyContent: 'center', marginTop: '1em', gap: '5px' }}>
                <p style={{ fontSize: '.8em', fontWeight: 500 }}>Novo por aqui?</p>
                <p style={{ fontSize: '.8em', fontWeight: 500, color: '#4c86d3', cursor: 'pointer' }} onClick={() => setIsNew(true)}>Cadastre-se!</p>
              </span>
              <Button color="primary" variant="contained" style={{ width: '100%', margin: '1em 0' }} type="submit">ENTRAR</Button>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </HeaderComponent>
  );
}

export default Header;