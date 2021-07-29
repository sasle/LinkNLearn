import React from 'react';
import './style.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Boleto from '../../assets/images/boleto.png'

import { Button, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import LooksOneIcon from '@material-ui/icons/LooksOne';
import LooksTwoIcon from '@material-ui/icons/LooksTwo';
import LooksThreeIcon from '@material-ui/icons/Looks3';
import LooksFourIcon from '@material-ui/icons/Looks4';

function HomeProfessor() {
  return (
    <div>
      <Header />
      <section>
        <div className="containerProfessor" id="containerPadding">
          <div className="textBox">
            <h1 id="headerEncontre">Divulgue seu curso e encontre turmas<br />para ministrar online</h1>
          </div>
        </div>
      </section>
      <section>
        <Grid container direction="column" alignItems="center">
          <Grid item md={12}>
            <h1 className="vantagens">Vantagens de divulgar aulas na Link&Learn</h1>
          </Grid>
          <Grid item container md={12} className="cardContainer">
            <Card className="card">
              <CardContent>
                <LooksOneIcon />
                <h1>Título Maior</h1>
                <p>subtítulo pequeno</p>
              </CardContent>
            </Card>
            <Card className="card">
              <CardContent>
                <LooksTwoIcon />
                <h1>Título Maior</h1>
                <p>subtítulo pequeno</p>
              </CardContent>
            </Card>
            <Card className="card">
              <CardContent>
                <LooksThreeIcon />
                <h1>Título Maior</h1>
                <p>subtítulo pequeno</p>
              </CardContent>
            </Card>
            <Card className="card">
              <CardContent>
                <LooksFourIcon />
                <h1>Título Maior</h1>
                <p>subtítulo pequeno</p>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </section>
      <section>
        <div className="containerProfessor2" id="containerPadding" style={{ marginTop: '2em' }}>
          <h1 id="headerCursosDestaque">Por onde começar</h1>
          <h1 id="headerPrincipaisCategorias">Formas de pagamento</h1>
          <div style={{ textAlign: 'center', marginTop: '2em' }}>
            <img src={Boleto} alt="Boleto" />
          </div>
        </div>
      </section>
      <section id="sectionComecarProf">
        <h1 id="header1Prof">Cadastre-se na nossa plataforma</h1>
        <h1 id="header2Prof">Encontre seus alunos e monte sua turma</h1>
        <Button color="primary" variant="contained" id="btnComecar">Começar</Button>
      </section>
      <Footer />
    </div>
  );
}

export default HomeProfessor;