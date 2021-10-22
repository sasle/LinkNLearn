import React, { useEffect, useState } from 'react';
import { Container, Section } from './style.js';
import { CartContext } from '../../context/CartContext';
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
  const [cart, setCart] = useState([CartContext._currentValue]);

  var price = 0;
  cart[0].map(item => {
    price += parseFloat(item.price);
  })

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
          {
            cart[0].length === 0 && <p style={{ fontWeight: 700, color: "#4c86d3", textAlign: 'center', fontSize: 'larger', marginTop: '10%' }}>Não há nenhum curso no carrinho ainda.</p>
          }
          {cart[0].length > 0 &&
            <>
              <Grid container className="box">
                <Grid item container direction="column" spacing={3}>
                  {
                    cart[0].map(item => (
                      <Grid item container alignItems="center" spacing={5}>
                        <Grid item md={2} style={{ textAlign: 'center' }}>
                          <Button color="secondary" variant="contained" onClick={() => {
                            cart[0].splice(cart[0].findIndex(x => x.id_course === item.id_course), 1);
                            setCart([CartContext._currentValue])
                          }}><DeleteIcon />Remover</Button>
                        </Grid>
                        <Grid item md={10}>
                          <CardCurso info={item} />
                        </Grid>
                      </Grid>
                    ))
                  }
                </Grid>
              </Grid>
              <Grid container className="box padding" justify="space-between" alignItems="center">
                <Grid item>
                  <h1 className="total">Total: R$ {price.toFixed(2)}</h1>
                </Grid>
                <Grid item>
                  <Button color="primary" variant="contained" className="finish" onClick={handleFinish}>Finalizar Pedido</Button>
                </Grid>
              </Grid>
            </>
          }
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
    </Container >
  );
}

export default Carrinho;