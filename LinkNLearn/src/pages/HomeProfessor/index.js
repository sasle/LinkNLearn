import React from 'react';
import { Section } from './style.js';
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
      <Section>
        <div className="container">
          <div className="textBox">
            <h1 className="headerEncontre">Divulgue seu curso e encontre turmas<br />para ministrar online</h1>
          </div>
        </div>
      </Section>
      <Section>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <h1 className="vantagens">Vantagens de divulgar aulas na Link&amp;Learn</h1>
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
      </Section>
      <Section>
        <div className="container2">
          <h1>Por onde começar</h1>
          <div className="divComecar">
            <h3>1 - Registre-se na nossa plataforma</h3>
          </div>
          <div className="divComecar">
            <h3>2 - Publique seus cursos</h3>
          </div>
          <div className="divComecar">
            <h3>3 - Receba seu dinheiro no fim de cada curso</h3>
          </div>
          <h1>Formas de pagamento</h1>
          <div className="boleto">
            <img src={Boleto} alt="Boleto" />
          </div>
        </div>
      </Section>
      <Section>
        <div className="sectionComecarProf">
          <h1> Cadastre-se na nossa plataforma</h1>
          <h2>Encontre seus alunos e monte sua turma</h2>
          <Button color="primary" variant="contained">Começar</Button>
        </div>
      </Section>
      <Footer />
    </div>
  );
}

export default HomeProfessor;