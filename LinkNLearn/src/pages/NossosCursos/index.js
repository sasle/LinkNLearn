import React, { useEffect, useState } from 'react';
import { Container, Section } from './style.js';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import CarouselItemCurso from '../../components/CarouselItemCurso';
import CarouselItemCategoriaDuasLinhas from '../../components/CarouselItemCategoriaDuasLinhas';


import Carousel from 'react-material-ui-carousel';
import axios from 'axios';


function NossosCursos() {

  const [cursos, setCursos] = useState([]);
  // const [categorias, setCategorias] = useState([]);

  async function loadCursos() {
    const cursosResponse = await axios.get(`${process.env.REACT_APP_URL}/courses/listAll`);
    setCursos(cursosResponse.data);
  }

  const dupla = cursos.reduce(function (rows, key, index) {
    return (index % 2 === 0 ? rows.push([key])
      : rows[rows.length - 1].push(key)) && rows;
  }, []);

  // async function loadCategorias() {
  //   const categoriasResponse = await axios.get(`${process.env.REACT_APP_URL}/category/listAll`);
  //   setCategorias(categoriasResponse.data);
  // }

  // const octeto = categorias.reduce(function (rows, key, index) {
  //   return (index % 8 === 0 ? rows.push([key])
  //     : rows[rows.length - 1].push(key)) && rows;
  // }, []);

  useEffect(() => {
    loadCursos();
    // loadCategorias();
  }, [])

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
          {/* <h2 className="subtitle">Categorias</h2>
          <div className="selecioneContainer">
            <h3 className="selecione">Selecione uma categoria e encontre os melhores cursos</h3>
          </div>
          <Carousel indicators={false} navButtonsAlwaysVisible className="carouselOcteto">
            {
              octeto.map((arrayOcteto, i) => <CarouselItemCategoriaDuasLinhas key={i} categorias={arrayOcteto} />)
            }
          </Carousel> */}
        </Section>
      </main>
      <Footer />
    </Container>
  );
}

export default NossosCursos;