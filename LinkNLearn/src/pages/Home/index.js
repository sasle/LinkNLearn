import React from 'react';
import './style.css';

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
      <section>
        <div className="container" id="containerPadding">
          <div className="textBox">
            <h1 id="headerEncontre">Encontre os melhores cursos com os<br />melhores professores</h1>
          </div>
        </div>
      </section>
      <section>
        <Grid container direction="column" alignItems="center">
          <Grid item md={12}>
            <h1 className="vantagens">Vantagens de estudar com a Link&Learn</h1>
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
        <div className="container2" id="containerPadding" style={{ marginTop: '2em' }}>
          <h1 id="headerCursosDestaque">Cursos em destaque</h1>
          <Carousel indicators={false} navButtonsAlwaysVisible>
            {
              dupla.map((arrayDupla, i) => <CarouselItemCurso key={i} dupla={arrayDupla} />)
            }
          </Carousel>
          <h1 id="headerPrincipaisCategorias">Principais Categorias</h1>
          <Carousel indicators={false} navButtonsAlwaysVisible>
            {
              quarteto.map((arrayQuarteto, i) => <CarouselItemCategoriaUmaLinha key={i} categorias={arrayQuarteto} />)
            }
          </Carousel>
          <h1 id="headerPrincipaisCategorias">Formas de pagamento</h1>
          <div style={{ textAlign: 'center', marginTop: '2em' }}>
            <img src={Boleto} alt="Boleto" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;