// import React, { useState } from 'react';
// import { Container, Section } from './style.js';
// import Footer from '../../components/Footer';
// import Header from '../../components/Header';

// import { useHistory } from 'react-router-dom';
// import { Button, FormControl, FormControlLabel, Grid } from '@material-ui/core';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import Pagination from '@material-ui/lab/Pagination';

// import StarIcon from '@material-ui/icons/Star';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
// import ClearIcon from '@material-ui/icons/Clear';

// import CardCurso from '../../components/CardCurso/index.js';


// function CursosPorCategoria(props) {
//   const history = useHistory();
//   const query = decodeURI(history.location.search.split('=')[1]);
//   const [classificacao, setClassificacao] = useState();
//   const [dificuldade, setDificuldade] = useState();
//   const [preco, setPreco] = useState();
//   const [page, setPage] = useState(1);

//   const cursos = useState(history.location.state.cursos);
//   const [trios, setTrios] = useState(cursos.reduce(function (rows, key, index) {
//     return (index % 3 === 0 ? rows.push([key])
//       : rows[rows.length - 1].push(key)) && rows;
//   }, []));


//   return (
//     <Container>
//       <Header />
//       <main className="main">
//         <h1 className="title">Cursos de "{query}"</h1>
//         <Section>
//           <Grid container className="box" wrap='nowrap' spacing={2}>
//             <Grid item container direction="column" md={4}>
//               <Grid item>
//                 <FormControl style={{ width: '100%' }}>
//                   <label>Classificação</label>
//                   <RadioGroup row aria-label="classificacao" value={classificacao} onClick={e => {
//                     setClassificacao(e.target.value);
//                     setTrios(cursos.filter(curso => Math.round(curso.nota) == e.target.value || curso.level == dificuldade || curso.price == preco).reduce(function (rows, key, index) {
//                       return (index % 3 === 0 ? rows.push([key])
//                         : rows[rows.length - 1].push(key)) && rows;
//                     }, []));
//                   }}>
//                     <FormControlLabel value="1" checked={classificacao > 0} control={<Radio icon={<StarBorderIcon fontSize="large" color="primary" />} checkedIcon={<StarIcon fontSize="large" color="primary" />} />} />
//                     <FormControlLabel value="2" checked={classificacao > 1} control={<Radio icon={<StarBorderIcon fontSize="large" color="primary" />} checkedIcon={<StarIcon fontSize="large" color="primary" />} />} />
//                     <FormControlLabel value="3" checked={classificacao > 2} control={<Radio icon={<StarBorderIcon fontSize="large" color="primary" />} checkedIcon={<StarIcon fontSize="large" color="primary" />} />} />
//                     <FormControlLabel value="4" checked={classificacao > 3} control={<Radio icon={<StarBorderIcon fontSize="large" color="primary" />} checkedIcon={<StarIcon fontSize="large" color="primary" />} />} />
//                     <FormControlLabel value="5" checked={classificacao > 4} control={<Radio icon={<StarBorderIcon fontSize="large" color="primary" />} checkedIcon={<StarIcon fontSize="large" color="primary" />} />} />
//                   </RadioGroup>
//                 </FormControl>
//                 <hr />
//               </Grid>
//               <Grid item>
//                 <FormControl style={{ width: '100%' }}>
//                   <label>Nível</label>
//                   <RadioGroup aria-label="dificuldade" value={dificuldade} onChange={e => {
//                     setDificuldade(e.target.value)
//                     setTrios(cursos.filter(curso => curso.level == e.target.value || Math.round(curso.nota) == classificacao || curso.price == preco).reduce(function (rows, key, index) {
//                       return (index % 3 === 0 ? rows.push([key])
//                         : rows[rows.length - 1].push(key)) && rows;
//                     }, []));
//                   }}>
//                     <FormControlLabel value="Iniciante" control={<Radio color="primary" />} label="Iniciante" />
//                     <FormControlLabel value="Intermediário" control={<Radio color="primary" />} label="Intermediário" />
//                     <FormControlLabel value="Avançado" control={<Radio color="primary" />} label="Avançado" />
//                   </RadioGroup>
//                 </FormControl>
//                 <hr />
//               </Grid>
//               <Grid item>
//                 <FormControl style={{ width: '100%' }}>
//                   <label>Preço</label>
//                   <RadioGroup aria-label="preço" value={preco} onChange={e => {
//                     setPreco(e.target.value)
//                     if (e.target.value == "1") {
//                       setTrios(cursos.filter(curso => curso.price <= 200 || Math.round(curso.nota) == classificacao || curso.level == dificuldade).reduce(function (rows, key, index) {
//                         return (index % 3 === 0 ? rows.push([key])
//                           : rows[rows.length - 1].push(key)) && rows;
//                       }, []));
//                     } else if (e.target.value == "2") {
//                       setTrios(cursos.filter(curso => curso.price <= 500 || Math.round(curso.nota) == classificacao || curso.level == dificuldade).reduce(function (rows, key, index) {
//                         return (index % 3 === 0 ? rows.push([key])
//                           : rows[rows.length - 1].push(key)) && rows;
//                       }, []));
//                     } else {
//                       setTrios(cursos.filter(curso => curso.price > 500 || Math.round(curso.nota) == classificacao || curso.level == dificuldade).reduce(function (rows, key, index) {
//                         return (index % 3 === 0 ? rows.push([key])
//                           : rows[rows.length - 1].push(key)) && rows;
//                       }, []));
//                     }
//                   }}>
//                     <FormControlLabel value="1" control={<Radio color="primary" />} label="Até R$200" />
//                     <FormControlLabel value="2" control={<Radio color="primary" />} label="Até R$500" />
//                     <FormControlLabel value="3" control={<Radio color="primary" />} label="Mais de R$500" />
//                   </RadioGroup>
//                 </FormControl>
//                 <hr />
//               </Grid>
//               <Grid item style={{ alignSelf: 'center', marginTop: '2em' }} onClick={() => setTrios(cursos.reduce(function (rows, key, index) {
//                 return (index % 3 === 0 ? rows.push([key])
//                   : rows[rows.length - 1].push(key)) && rows;
//               }, []))}>
//                 <Button variant="contained" color="primary"><ClearIcon />Limpar filtros</Button>
//               </Grid>
//             </Grid>

//             <Grid item container direction="column" md={8}>

//               {
//                 trios.length > 0 ?
//                   trios[page - 1].map(trio => (
//                     <Grid key={trio.id_course} item className="card">
//                       <CardCurso info={trio} />
//                     </Grid>
//                   ))
//                   :
//                   <p style={{ textAlign: "center", fontWeight: 700, marginTop: "15%" }}>Nenhum curso encontrado com estes filtros.</p>
//               }
//               {
//                 trios.length > 0 &&
//                 <Grid item className="paginator">
//                   <Pagination count={parseInt(trios.length.toFixed(0))} onChange={(e, page) => setPage(page)} />
//                 </Grid>
//               }
//             </Grid>
//           </Grid>
//         </Section>
//       </main>
//       <Footer />
//     </Container >
//   );
// }

// export default CursosPorCategoria;