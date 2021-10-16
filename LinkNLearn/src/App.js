import React from 'react';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import Home from './pages/Home';
import NossosCursos from './pages/NossosCursos';
import HomeProfessor from './pages/HomeProfessor';
import Cursos from './pages/Cursos';
import CursosPorCategoria from './pages/CursosPorCategoria';
import CursoView from './pages/CursoView';
import ProfessorPublicView from './pages/ProfessorPublicView';
import Carrinho from './pages/Carrinho';
import Perfil from './pages/Perfil';
import PerfilDados from './pages/PerfilDados';
import CadastrarCurso from './pages/CadastrarCurso';
import './assets/custom.css';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#3577CC',
      },
      secondary: {
        main: 'rgba(255, 71, 51, 0.97)',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/professor' component={HomeProfessor} />
          <Route exact path='/nossos-cursos' component={NossosCursos} />
          <Route exact path='/cursos' component={Cursos} />
          <Route exact path='/categoria' component={CursosPorCategoria} />
          <PrivateRoute exact path='/curso/:id' component={CursoView} />
          <PrivateRoute exact path='/professor/:id' component={ProfessorPublicView} />
          <PrivateRoute exact path='/carrinho' component={Carrinho} />
          <PrivateRoute exact path='/perfil' component={Perfil} />
          <PrivateRoute exact path='/perfil/dados' component={PerfilDados} />
          <PrivateRoute exact path='/cadastrar-curso' component={CadastrarCurso} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;