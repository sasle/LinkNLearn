import React from 'react';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import HomeProfessor from './pages/HomeProfessor';
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
          <Route exact path='/home/professor' component={HomeProfessor} />
          <Route exact path='/about' component={About} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;