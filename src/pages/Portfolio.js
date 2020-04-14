import React, { Component } from 'react'
import MenuLateral from '../components/Todas/MenuLateral'
import CineAtlantico1 from '../components/imagens/portfolio/cineatlantico/1.jpg'
import CineAtlantico2 from '../components/imagens/portfolio/cineatlantico/2.jpg'
import CineAtlantico3 from '../components/imagens/portfolio/cineatlantico/3.jpg'

import Exodus1 from '../components/imagens/portfolio/exodus/1.jpg'
import Exodus2 from '../components/imagens/portfolio/exodus/2.jpg'
import Exodus3 from '../components/imagens/portfolio/exodus/3.jpg'

const principalClasses = 'container-fluid m-0 p-0'

class Portfolio extends Component {
  render () {
    return (
      <div className={`${principalClasses} pagina-secundaria`}>
        <MenuLateral />

        <div className='portfolio-pagina fonte-secundaria'>
          <div className='text-center font-weight-bold'>
            <a href='https://cine-atlantico.herokuapp.com/' target='_blank'>
              CineAtlantico - ECommerce
            </a>
            <ul className='d-flex d-inline-block mt-2'>
              <li className='mt-3 mb-3 mr-3 ml-0 item'>
                <a
                  href='https://cine-atlantico.herokuapp.com/'
                  target='_blank'
                  title='ReactJS + SASS '
                >
                  <figure>
                    <img
                      src={CineAtlantico1}
                      width='auto'
                      height='180px'
                      style={{ objectFit: 'contain' }}
                    />
                  </figure>
                </a>
              </li>
              <li className='m-3 item'>
                <a
                  href='https://cine-atlantico.herokuapp.com/'
                  target='_blank'
                  title='ReactJS + SASS '
                >
                  <figure>
                    <img
                      src={CineAtlantico2}
                      width='auto'
                      height='180px'
                      style={{ objectFit: 'contain' }}
                    />
                  </figure>
                </a>
              </li>
              <li className='m-3 item'>
                <a
                  href='https://cine-atlantico.herokuapp.com/'
                  target='_blank'
                  title='ReactJS + SASS '
                >
                  <figure>
                    <img
                      src={CineAtlantico3}
                      width='auto'
                      height='180px'
                      style={{ objectFit: 'contain' }}
                    />
                  </figure>
                </a>
              </li>
            </ul>
          </div>

          <div className='text-center font-weight-bold'>
            <a href=''> Exodus - Landing Page</a>
            <ul className='d-flex d-inline-block mt-2'>
              <li className='mt-3 mb-3 mr-3 ml-0 item'>
                <a
                  href='https://alanreisb.github.io/LandingPagePortfolio/'
                  target='_blank'
                  title='HTML5 + BootStrap'
                >
                  <figure>
                    <img
                      src={Exodus1}
                      width='auto'
                      height='180px'
                      style={{ objectFit: 'contain' }}
                    />
                  </figure>
                </a>
              </li>
              <li className='m-3 item'>
                <a
                  href='https://alanreisb.github.io/LandingPagePortfolio/'
                  target='_blank'
                  title='HTML5 + BootStrap'
                >
                  <figure>
                    <img
                      src={Exodus2}
                      width='auto'
                      height='180px'
                      style={{ objectFit: 'contain' }}
                    />
                  </figure>
                </a>
              </li>
              <li className='m-3 item'>
                <a
                  href='https://alanreisb.github.io/LandingPagePortfolio/'
                  target='_blank'
                  title='HTML5 + BootStrap'
                >
                  <figure>
                    <img
                      src={Exodus3}
                      width='auto'
                      height='180px'
                      style={{ objectFit: 'contain' }}
                    />
                  </figure>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio
