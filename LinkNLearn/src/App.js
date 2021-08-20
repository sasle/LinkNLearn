import React from 'react';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NossosCursos from './pages/NossosCursos';
import HomeProfessor from './pages/HomeProfessor';
import Cursos from './pages/Cursos';
import CursosPorCategoria from './pages/CursosPorCategoria';
import CursoView from './pages/CursoView';
import ProfessorPublicView from './pages/ProfessorPublicView';
import Carrinho from './pages/Carrinho';
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
          <Route exact path='/curso/:id' component={CursoView} />
          <Route exact path='/professor/:id' component={ProfessorPublicView} />
          <Route exact path='/carrinho' component={Carrinho} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;