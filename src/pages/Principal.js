import React, { Component } from 'react'
import Media from 'react-media'
/* Componentes */
import Menu from '../components/Principal/nav-principal'
import MenuLateral from '../components/Todas/MenuLateral'
import Titulo from '../components/Principal/titulo'
import Player from '../components/Principal/player'

class Principal extends Component {
  render () {
    return (
      <div className='pagina-principal'>
        <Media query='(max-width: 599px)'>
          {matches => (matches ? <MenuLateral /> : <Menu />)}
        </Media>

        <Titulo />
        <div className='cover'>
          <img
            src={require('../components/imagens/BlackHole.gif')}
            className='imagem'
          />
          
        </div>

        <Player />
      </div>
    )
  }
}

export default Principal
