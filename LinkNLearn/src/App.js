import React from 'react';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NossosCursos from './pages/NossosCursos';
import HomeProfessor from './pages/HomeProfessor';
import Cursos from './pages/Cursos';
import CursoView from './pages/CursoView';
import './assets/custom.css';


function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#3577CC',
      },
      secondary: {
        main: '#fff',
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
          <Route exact path='/curso/:id' component={CursoView} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;