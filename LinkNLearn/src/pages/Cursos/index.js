import React, { useState } from 'react';
import { Container, Section } from './style.js';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import { useHistory } from 'react-router-dom';
import { FormControl, FormControlLabel, Grid } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Pagination from '@material-ui/lab/Pagination';

import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import CardCurso from '../../components/CardCurso/index.js';


function Cursos(props) {
  const history = useHistory();
  const query = decodeURI(history.location.search.split('=')[1]); //usar pra pesquisar no back

  const [classificacao, setClassificacao] = useState(0);
  const [dificuldade, setDificuldade] = useState(0);
  const [preco, setPreco] = useState(0);

  console.log(classificacao)

  return (
    <Container>
      <Header />
      <main className="main">
        <h1 className="title">Cursos de "{query}"</h1>
        <Section>
          <Grid container className="box" wrap='nowrap' spacing={2}>
            <Grid item container direction="column" md={4}>
              <Grid item>
                <FormControl style={{ width: '100%' }}>
                  <label>Classificação</label>
                  <RadioGroup row aria-label="classificacao" value={classificacao} onClick={e => setClassificacao(e.target.value)}>
                    <FormControlLabel value="1" checked={classificacao > 0} control={<Radio icon={<StarBorderIcon fontSize="large" color="primary" />} checkedIcon={<StarIcon fontSize="large" color="primary" />} />} />
                    <FormControlLabel value="2" checked={classificacao > 1} control={<Radio icon={<StarBorderIcon fontSize="large" color="primary" />} checkedIcon={<StarIcon fontSize="large" color="primary" />} />} />
                    <FormControlLabel value="3" checked={classificacao > 2} control={<Radio icon={<StarBorderIcon fontSize="large" color="primary" />} checkedIcon={<StarIcon fontSize="large" color="primary" />} />} />
                    <FormControlLabel value="4" checked={classificacao > 3} control={<Radio icon={<StarBorderIcon fontSize="large" color="primary" />} checkedIcon={<StarIcon fontSize="large" color="primary" />} />} />
                    <FormControlLabel value="5" checked={classificacao > 4} control={<Radio icon={<StarBorderIcon fontSize="large" color="primary" />} checkedIcon={<StarIcon fontSize="large" color="primary" />} />} />
                  </RadioGroup>
                </FormControl>
                <hr />
              </Grid>
              <Grid item>
                <FormControl style={{ width: '100%' }}>
                  <label>Nível</label>
                  <RadioGroup aria-label="dificuldade" value={dificuldade} onChange={e => setDificuldade(e.target.value)}>
                    <FormControlLabel value="1" control={<Radio color="primary" />} label="Iniciante" />
                    <FormControlLabel value="2" control={<Radio color="primary" />} label="Intermediário" />
                    <FormControlLabel value="3" control={<Radio color="primary" />} label="Avançado" />
                  </RadioGroup>
                </FormControl>
                <hr />
              </Grid>
              <Grid item>
                <FormControl style={{ width: '100%' }}>
                  <label>Preço</label>
                  <RadioGroup aria-label="preço" value={preco} onChange={e => setPreco(e.target.value)}>
                    <FormControlLabel value="1" control={<Radio color="primary" />} label="Até R$200" />
                    <FormControlLabel value="2" control={<Radio color="primary" />} label="Até R$500" />
                    <FormControlLabel value="3" control={<Radio color="primary" />} label="Mais de R$500" />
                  </RadioGroup>
                </FormControl>
                <hr />
              </Grid>
            </Grid>
            <Grid item container direction="column" md={8}>
              <Grid item className="card">
                <CardCurso titulo="Título Maior" resumo="Descrição do curso resumido" professor="Nome professor" preco="00,00" nivel="Iniciante" nota="4.8" />
              </Grid>
              <Grid item className="card">
                <CardCurso titulo="Título Maior" resumo="Descrição do curso resumido" professor="Nome professor" preco="00,00" nivel="Iniciante" nota="4.8" />
              </Grid>
              <Grid item className="card">
                <CardCurso titulo="Título Maior" resumo="Descrição do curso resumido" professor="Nome professor" preco="00,00" nivel="Iniciante" nota="4.8" />
              </Grid>
              <Grid item className="paginator">
                <Pagination count={20} />
              </Grid>
            </Grid>
          </Grid>
        </Section>
      </main>
      <Footer />
    </Container>
  );
}

export default Cursos;