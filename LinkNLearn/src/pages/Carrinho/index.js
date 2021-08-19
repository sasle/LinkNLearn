import React, { useState } from 'react';
import { Container, Section } from './style.js';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import { Link, useHistory } from 'react-router-dom';
import { Button, Dialog, DialogContent, Grid } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeleteIcon from '@material-ui/icons/Delete';

import CardCurso from '../../components/CardCurso/index.js';


function Carrinho(props) {
  const history = useHistory();

  const [open, setOpen] = useState(false);

  function handleFinish() {
    //gerar boleto etc.
    setOpen(true);
  }

  return (
    <Container>
      <Header />
      <main className="main">
        <Grid container justifyContent="center" className="title">
          <ArrowBackIcon onClick={() => history.goBack()} style={{ cursor: 'pointer' }} fontSize="large" />
          Carrinho
        </Grid>
        <Section>
          <Grid container className="box">
            <Grid item container direction="column" spacing={3}>
              <Grid item container alignItems="center" spacing={5}>
                <Grid item md={2} style={{ textAlign: 'center' }}>
                  <Button color="secondary" variant="contained"><DeleteIcon />Remover</Button>
                </Grid>
                <Grid item md={10}>
                  <CardCurso id={99999} titulo="A Mégica do React" resumo="Descrição do curso resumido" professor="Nome professor" preco="00,00" nivel="Iniciante" nota="4.8" />
                </Grid>
              </Grid>
              <Grid item container alignItems="center" spacing={5}>
                <Grid item md={2} style={{ textAlign: 'center' }}>
                  <Button color="secondary" variant="contained"><DeleteIcon />Remover</Button>
                </Grid>
                <Grid item md={10}>
                  <CardCurso id={99999} titulo="A Mégica do React" resumo="Descrição do curso resumido" professor="Nome professor" preco="00,00" nivel="Iniciante" nota="4.8" />
                </Grid>
              </Grid>
              <Grid item container alignItems="center" spacing={5}>
                <Grid item md={2} style={{ textAlign: 'center' }}>
                  <Button color="secondary" variant="contained"><DeleteIcon />Remover</Button>
                </Grid>
                <Grid item md={10}>
                  <CardCurso id={99999} titulo="A Mégica do React" resumo="Descrição do curso resumido" professor="Nome professor" preco="00,00" nivel="Iniciante" nota="4.8" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container className="box padding" justify="space-between" alignItems="center">
            <Grid item>
              <h1 className="total">Total: R$ 00,00</h1>
            </Grid>
            <Grid item>
              <Button color="primary" variant="contained" className="finish" onClick={handleFinish}>Finalizar Pedido</Button>
            </Grid>
          </Grid>
        </Section>
      </main>
      <Footer />
      <Dialog open={open} fullWidth maxWidth="lg">
        <DialogContent style={{ textAlign: 'center', paddingBottom: '3em' }}>
          <h1 style={{ width: '50%', fontSize: '1.5em', color: '#4c86d3', margin: '0 auto', padding: '2em 0' }}>
            Pedido realizado com sucesso!
            Em poucos minutos você receberá o boleto por e-mail para finalização da compra.
          </h1>
          <Link to='/'>
            <Button color="primary" variant="contained">Voltar para tela inicial</Button>
          </Link>
        </DialogContent>
      </Dialog>
    </Container>
  );
}

export default Carrinho;