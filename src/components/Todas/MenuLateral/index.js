import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// Componente
import Botao from './Botao'

// Icones
import homeIcon from '../../imagens/menu/home.png'
import profileIcon from '../../imagens/menu/profile.png'
import skillIcon from '../../imagens/menu/skills.png'
import portfolioIcon from '../../imagens/menu/portfolio.png'
import contactIcon from '../../imagens/menu/speech.png'
import facebookIcon from '../../imagens/menu/facebook.png'
import whatsappIcon from '../../imagens/menu/whatsapp.png'
import githubIcon from '../../imagens/menu/github.png'
import linkedinIcon from '../../imagens/menu/linkedin.png'

class menuLateral extends Component {
  render () {
    return (
      <div className='menu-lateral'>
        <ul className=' lista'>
          <li className='nav-item item'>
            <Link to='/' className='link'>
              <Botao background={homeIcon}>Home </Botao>
            </Link>
          </li>
          <li className='nav-item  item'>
            <Link to='/sobre' className='link'>
              <Botao background={profileIcon}>Sobre</Botao>
            </Link>
          </li>
          <li className='nav-item item'>
            <Link to='/habilidades' className='link'>
              {' '}
              <Botao background={skillIcon}>Habilidades</Botao>
            </Link>
          </li>
          <li className='nav-item item'>
            <Link to='/portfolio' className='link'>
              {' '}
              <Botao background={portfolioIcon}>Portfolio</Botao>
            </Link>
          </li>
          <li className='nav-item item'>
            <Link to='/contatos' className='link'>
              <Botao background={contactIcon}>Contato</Botao>
            </Link>
          </li>
        </ul>
        <ul className='nav  contatos-lista '>
          <li className='nav-item item '>
            <a href='https://www.linkedin.com/in/alanreisb' target='_blank'>
              {' '}
              <Botao background={linkedinIcon} />
            </a>
          </li>
          <li className='nav-item item'>
            <a href='https://github.com/alanreisb' target='_blank'>
              <Botao background={githubIcon} />
            </a>
          </li>
          <li className='nav-item item'>
            <a href='https://www.facebook.com/devalanreis' target='_blank'>
              {' '}
              <Botao background={facebookIcon} />
            </a>
          </li>
          <li className='nav-item item'>
            <a href='tel:(12)98250-1585'>
              <Botao background={whatsappIcon} />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default menuLateral
