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
      id: 1,
      titulo: "React",
      resumo: "Resumo",
      professor: "Alexandre",
      preco: 150,
      nivel: "Intermediário",
      nota: 4.8
    },
    {
      id: 2,
      titulo: "UX",
      resumo: "Resumo",
      professor: "Vitor",
      preco: 300,
      nivel: "Avançado",
      nota: 4.8
    },
    {
      id: 3,
      titulo: "Android",
      resumo: "Resumo",
      professor: "Freddy",
      preco: 220,
      nivel: "Avançado",
      nota: 4.8
    },
    {
      id: 4,
      titulo: "Android",
      resumo: "Resumo",
      professor: "Freddy",
      preco: 900,
      nivel: "Avançado",
      nota: 4.8
    },
    {
      id: 5,
      titulo: "Android",
      resumo: "Resumo",
      professor: "Freddy",
      preco: 140,
      nivel: "Avançado",
      nota: 3.2
    },
    {
      id: 6,
      titulo: "Android",
      resumo: "Resumo",
      professor: "Freddy",
      preco: 650,
      nivel: "Avançado",
      nota: 4.8
    },
    {
      id: 7,
      titulo: "fsdafdsafsdfs",
      resumo: "Resumo",
      professor: "Freddy",
      preco: 310,
      nivel: "Avançado",
      nota: 4.8
    },
    {
      id: 8,
      titulo: "teste",
      resumo: "Resumo",
      professor: "Freddy",
      preco: 500,
      nivel: "Intermediário",
      nota: 2
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