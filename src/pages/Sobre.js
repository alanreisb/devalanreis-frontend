import React, { Component } from 'react'
// Componentes
import MenuLateral from '../components/Todas/MenuLateral'
import Texto from '../components/Texto'
import Piramide from '../components/Sobre/Piramide'

const principalClasses = 'container-fluid m-0 p-0'

class Sobre extends Component {
  render () {
    return (
      <div className={`${principalClasses} pagina-secundaria`}>
        <MenuLateral />

        <Texto titulo='Sobre mim'>
          Sou um profissional apaixonado por desafios que nunca desiste de algo
          que começa. Decidi cursar Analise e Desenvolvimento de Sistemas como forma de
           poder ajudar as pessoas em suas atividades simples de seu cotidiano.
          <br />
          <br />
          Costumo ser perfeccionista com detalhes, ao mesmo tempo procuro
          ser dinâmico ao executar uma tarefa. Sempre buscando novos conhecimentos que 
          possam ser aplicados.
          <br />
          <br />
          Atualmente buscando uma oportunidade como desenvolvedor
          junior.
        </Texto>

        <Piramide />
      </div>
    )
  }
}

export default Sobre
