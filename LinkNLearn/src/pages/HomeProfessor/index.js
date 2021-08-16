import React from 'react';
import './style.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Boleto from '../../assets/images/boleto.png'

import { Button, Grid, Paper } from '@material-ui/core';
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
          <Grid item>
            <h1 className="vantagens">Vantagens de divulgar aulas na Link&Learn</h1>
          </Grid>
          <Grid item container>
            <Grid item md={3}>
              <Card className="card">
                <CardContent>
                  <LooksOneIcon fontSize="large" />
                  <h1 className="tituloVantagem">Rentabilidade</h1>
                  <p className="subtituloVantagem">Gere lucro compartilhando seus conhecimentos</p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={3}>
              <Card className="card">
                <CardContent>
                  <LooksTwoIcon fontSize="large" />
                  <h1 className="tituloVantagem">Segurança</h1>
                  <p className="subtituloVantagem">Garantimos o pagamento dos alunos ao fim de cada curso</p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={3}>
              <Card className="card">
                <CardContent>
                  <LooksThreeIcon fontSize="large" />
                  <h1 className="tituloVantagem">Simplicidade</h1>
                  <p className="subtituloVantagem">Ministre suas aulas no conforto de onde você estiver</p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={3}>
              <Card className="card">
                <CardContent>
                  <LooksFourIcon fontSize="large" />
                  <h1 className="tituloVantagem">Divulgação</h1>
                  <p className="subtituloVantagem">Colocamos seus 3 primeiros curso em destaque na nossa plataforma</p>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </section>
      <section>
        <div className="containerProfessor2" id="containerPadding" style={{ marginTop: '2em', paddingBottom: 0 }}>
          <h1 id="headerCursosDestaque">Por onde começar</h1>
          <div className="divComecar">
            <h3 style={{ fontSize: '1.5em' }}>1 - Registre-se na nossa plataforma</h3>
          </div>
          <div className="divComecar">
            <h3 style={{ fontSize: '1.5em' }}>2 - Publique seus cursos</h3>
          </div>
          <div className="divComecar">
            <h3 style={{ fontSize: '1.5em' }}>3 - Receba seu dinheiro no fim de cada curso</h3>
          </div>
          <h1 id="headerPrincipaisCategorias">Formas de pagamento</h1>
          <div style={{ textAlign: 'center', marginTop: '2em', paddingBottom: '2em' }}>
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