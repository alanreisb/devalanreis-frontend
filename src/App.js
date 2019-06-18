/*Core*/
import React, { Component, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
/*Estilo*/
import './styles/App.scss';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Animate from './styles/Animate.css';
import Animacoes from './styles/Animacoes.scss';
import Media from './styles/Media.scss';
/*Paginas*/



import LoadingImagem from './components/imagens/loading/loading.gif';
import LoadingTexto from './components/imagens/loading/texto.gif';

const Principal = lazy(() => import('./pages/Principal'));
const Sobre = lazy(() => import('./pages/Sobre'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Habilidades = lazy(() => import('./pages/Habilidades'));
const Contatos = lazy(() => import('./pages/Contatos'));



class App extends Component {
  componentDidMount() {
    document.title = "Dev Alan Reis"
  }
  render() {
    console.log(this.state);
    console.log("This is the process.env", process.env.PUBLIC_URL);
    return (

      <div className="App" >
        <link href={Bootstrap} rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond" rel="stylesheet" />
        <link href={Animate} rel="stylesheet" />
        <link href={Animacoes} rel="stylesheet" />
        <link href={Media} rel="stylesheet" />

        <Suspense fallback={
          <div className='loading-screen'>
            <div className='loading-container'>
              <img className='imagem' src={LoadingImagem}></img>
              <img className='texto' src={LoadingTexto}></img>
            </div>
          </div>
        }>
          <Route exact path={`/`} component={Principal} />
          <Route exact path={`/sobre`} component={Sobre} />
          <Route exact path={`/habilidades`} component={Habilidades} />
          <Route exact path={`/portfolio`} component={Portfolio} />
          <Route exact path={`/contatos`} component={Contatos} />
        </Suspense>

      </div>


    );
  }
}

export default App;