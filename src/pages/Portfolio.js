import React, { Component } from 'react';
import MenuLateral from '../components/Todas/MenuLateral';
import Exodus from '../components/imagens/portfolio/Exodus.gif';

const principalClasses = 'container-fluid m-0 p-0';






  
class Portfolio extends Component {
  render() {
    return (
      <div className={`${principalClasses} container-fluid`}>
        <MenuLateral></MenuLateral>


        <div className='portfolio-pagina fonte-secundaria'>
          <ul className='d-flex d-inline-block'>
            <li  className='m-3 item'>
              <a href='https://alanreisb.github.io/LandingPagePortfolio/' target='_blank' title='HTML5 + BootStrap'>
                <figure>
                  <figcaption className='mb-3'>Exodus - LandingPage</figcaption>
                  <img src={Exodus}></img>
                </figure></a>
            </li>
            
          </ul>

        </div>
      </div>
    );
  }
}

export default Portfolio;