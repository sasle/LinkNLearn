import React from 'react';
import { Section } from './style.js';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CarouselItemCurso from '../../components/CarouselItemCurso';
import CarouselItemCategoriaUmaLinha from '../../components/CarouselItemCategoriaUmaLinha';

import Boleto from '../../assets/images/boleto.png'

import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import LooksOneIcon from '@material-ui/icons/LooksOne';
import LooksTwoIcon from '@material-ui/icons/LooksTwo';
import LooksThreeIcon from '@material-ui/icons/Looks3';
import LooksFourIcon from '@material-ui/icons/Looks4';
import Carousel from 'react-material-ui-carousel';

function Home() {
  var cursos = [
    {
      titulo: "React",
      professor: "Alexandre",
      preco: 150,
      nota: 4.8
    },
    {
      titulo: "UX",
      professor: "Vitor",
      preco: 1000000,
      nota: 4.8
    },
    {
      titulo: "Android",
      professor: "Freddy",
      preco: 1000000,
      nota: 4.8
    },
    {
      titulo: "Backend",
      professor: "Djeison",
      preco: 1000000,
      nota: 4.8
    },
    {
      titulo: "Backend",
      professor: "Djeison",
      preco: 1000000,
      nota: 4.8
    }
  ]

  var categorias = [
    {
      titulo: "Frontend",
    },
    {
      titulo: "UX",
    },
    {
      titulo: "Mobile",
    },
    {
      titulo: "Backend",
    },
    {
      titulo: "Frontend",
    },
    {
      titulo: "UX",
    },
    {
      titulo: "Backend",
    },
    {
      titulo: "Backend",
    },
    {
      titulo: "Backend",
    }
  ]

  const dupla = cursos.reduce(function (rows, key, index) {
    return (index % 2 === 0 ? rows.push([key])
      : rows[rows.length - 1].push(key)) && rows;
  }, []);

  const quarteto = categorias.reduce(function (rows, key, index) {
    return (index % 4 === 0 ? rows.push([key])
      : rows[rows.length - 1].push(key)) && rows;
  }, []);

  return (
    <div>
      <Header />
      <Section>
        <div className="container">
          <div className="textBox">
            <h1 className="headerEncontre">Encontre os melhores cursos com os<br />melhores professores</h1>
          </div>
        </div>
      </Section>
      <Section>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <h1 className="vantagens">Vantagens de estudar com a Link&amp;Learn</h1>
          </Grid>
          <Grid item container>
            <Grid item md={3}>
              <Card className="card">
                <CardContent>
                  <LooksOneIcon />
                  <h1 className="tituloVantagem">Aproximação</h1>
                  <p className="subtituloVantagem">Ter aulas ao vivo e tirar suas dúvidas</p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={3}>
              <Card className="card">
                <CardContent>
                  <LooksTwoIcon />
                  <h1 className="tituloVantagem">Conhecimento</h1>
                  <p className="subtituloVantagem">Aprimore seu conhecimento com os melhores instrutores</p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={3}>
              <Card className="card">
                <CardContent>
                  <LooksThreeIcon />
                  <h1 className="tituloVantagem">Segurança</h1>
                  <p className="subtituloVantagem">Garantimos seu dinheiro de volta caso o curso não atenda as expectativas</p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={3}>
              <Card className="card">
                <CardContent>
                  <LooksFourIcon />
                  <h1 className="tituloVantagem">Integridade</h1>
                  <p className="subtituloVantagem">Instrutores qualificados para ministrar o curso</p>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Section>
      <Section>
        <div className="container2">
          <h1 className="headerCursosDestaque">Cursos em destaque</h1>
          <Carousel indicators={false} navButtonsAlwaysVisible>
            {
              dupla.map((arrayDupla, i) => <CarouselItemCurso key={i} dupla={arrayDupla} />)
            }
          </Carousel>
          <h1 className="headerPrincipaisCategorias">Principais Categorias</h1>
          <Carousel indicators={false} navButtonsAlwaysVisible>
            {
              quarteto.map((arrayQuarteto, i) => <CarouselItemCategoriaUmaLinha key={i} categorias={arrayQuarteto} />)
            }
          </Carousel>
          <h1 className="headerPrincipaisCategorias">Formas de pagamento</h1>
          <div className="boleto">
            <img src={Boleto} alt="Boleto" />
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
}

export default Home;