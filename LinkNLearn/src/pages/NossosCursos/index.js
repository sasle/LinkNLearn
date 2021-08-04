import React from 'react';
import { Container, Section } from './style.js';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import CarouselItemCurso from '../../components/CarouselItemCurso';
import CarouselItemCategoriaDuasLinhas from '../../components/CarouselItemCategoriaDuasLinhas';


import Carousel from 'react-material-ui-carousel';


function NossosCursos() {

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

  const dupla = cursos.reduce(function (rows, key, index) {
    return (index % 2 === 0 ? rows.push([key])
      : rows[rows.length - 1].push(key)) && rows;
  }, []);

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
  ];

  const octeto = categorias.reduce(function (rows, key, index) {
    return (index % 8 === 0 ? rows.push([key])
      : rows[rows.length - 1].push(key)) && rows;
  }, []);


  return (
    <Container>
      <Header />
      <main className="main">
        <h1 className="title">Nossos Cursos</h1>
        <Section>
          <h2 className="subtitle">Cursos em destaque</h2>
          <Carousel indicators={false} navButtonsAlwaysVisible>
            {
              dupla.map((arrayDupla, i) => <CarouselItemCurso key={i} dupla={arrayDupla} />)
            }
          </Carousel>
          <h2 className="subtitle">Categorias</h2>
          <div className="selecioneContainer">
            <h3 className="selecione">Selecione uma categoria e encontre os melhores cursos</h3>
          </div>
          <Carousel indicators={false} navButtonsAlwaysVisible className="carouselOcteto">
            {
              octeto.map((arrayOcteto, i) => <CarouselItemCategoriaDuasLinhas key={i} categorias={arrayOcteto} />)
            }
          </Carousel>
        </Section>
      </main>
      <Footer />
    </Container>
  );
}

export default NossosCursos;