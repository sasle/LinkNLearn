import React from 'react';
import './style.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Bg1 from '../../assets/images/bg1home.png';
import Bg2 from '../../assets/images/bg2home.png';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import LooksOneIcon from '@material-ui/icons/LooksOne';
import LooksTwoIcon from '@material-ui/icons/LooksTwo';
import LooksThreeIcon from '@material-ui/icons/Looks3';
import LooksFourIcon from '@material-ui/icons/Looks4';

function Home() {
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
            <h1 class="vantagens">Vantagens de estudar com a Link&Learn</h1>
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
      <Footer />
    </div>
  );
}

export default Home;