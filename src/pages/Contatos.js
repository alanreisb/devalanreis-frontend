import React, { Component } from 'react'
// Componentes
import MenuLateral from '../components/Todas/MenuLateral'
import FormMessage from '../components/Contatos/form-message'
// Imagens
import Localizacao from '../components/imagens/contatos/placeholder.png'
import Spot from '../components/imagens/contatos/spot.png'
import fbIcon from '../components/imagens/icones contato/facebook.png'
import wpIcon from '../components/imagens/icones contato/whatsapp.png'
import lkIcon from '../components/imagens/icones contato/linkedin.png'

// Classes
const contatosLocalizacaoClasse = 'fonte-secundaria pt-4 mt-0 text-center '
const contatosLocalizacaoSecaoClasse = ' pl-0 text-left mt-3'
const contatosLocalizacaoTituloClasse =
  'w-75 pl-0 text-left text-light font-weight-bold mt-0 d-flex flex-row '
const contatosLocalEndereco =
  'text-justify mt-3 fonte-secundaria font-weight-bold endereco'
const contatosLocalIcones = 'text-light m-0 mt-3 mb-4 ml-0 p-0'
const contatosLocalIcone = 'p-2 font-weight-bold'

const principalClasses = 'w-100 h-100 m-0 p-0 '

class Contatos extends Component {
  render () {
    return (
      <div className={`${principalClasses}  pagina-secundaria`}>
        <MenuLateral />
        <div className={`contatos-localizacao ${contatosLocalizacaoClasse}`}>
          <div className={`secao ${contatosLocalizacaoSecaoClasse}`}>
            <div className={`titulo ${contatosLocalizacaoTituloClasse}`}>
              <img
                src={Localizacao}
                className='icone mr-3 animated fadeInDown'
              />
              <h2 className=''> Contatos </h2>{' '}
            </div>

            <ul className={contatosLocalIcones}>
              <li className={contatosLocalIcone}>
                <a href='https://www.facebook.com/devalanreis' target='_blank'>
                  <img src={fbIcon} className='icones-contato mr-2 mb-1 pt-2' />
                  https://www.facebook.com/devalanreis
                </a>
              </li>
              <li className={contatosLocalIcone}>
                <a href='https://www.linkedin.com/in/alanreisb' target='_blank'>
                  <img src={lkIcon} className='icones-contato mr-2 mb-1 pt-2' />
                  https://www.linkedin.com/in/alanreisb
                </a>
              </li>
              <li className={contatosLocalIcone}>
                <a href='tel:(12)98139-2330'>
                  <img
                    src={wpIcon}
                    className='icones-contato mr-2 mb-1 pt-2'
                    title='(12)98139-2330'
                  />
                  Cel:(12)98139-2330
                </a>
              </li>
            </ul>
            <div className='d-flex flex-row'>
              <img src={Spot} className='mr-3 mb-3' alt='' />
              <h2>Localização</h2>
            </div>
            <iframe
              className='mapa'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64543.1153744142!2d-45.14741399380834!3d-22.729608362515197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccc9201d468adf%3A0xc9ce9c4b4546c622!2sLorena%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1576537760145!5m2!1spt-BR!2sbr'
              height='250px'
              frameborder='0'
              allowfullscreen
            />
          </div>
        </div>
        <FormMessage />
      </div>
    )
  }
}

export default Contatos
