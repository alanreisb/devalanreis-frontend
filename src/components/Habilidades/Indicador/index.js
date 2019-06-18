import React, { Component } from 'react';
import Barra from './barra';

const indicadorClasse = 'h-100 float-right position-relative p-0';


class indicadores extends Component {
    render() {
        return (
            <div className={`${indicadorClasse} indicador-habilidades`}>
                <ul className='lista fonte-secundaria'>

                    <div className='mb-4'><h3>Plataformas</h3>
                        <li><Barra titulo='ReactJs' cor='green' porcentagem='40'></Barra></li>
                        <li><Barra titulo='NodeJs' cor='green' porcentagem='20'></Barra></li>
                    </div>

                    <div className='mb-4' ><h3>Linguagens</h3>
                        <li><Barra titulo='C#' cor='yellow' porcentagem='65'></Barra></li>
                    </div>

                    <div className='mb-4'><h3>Básicas</h3>
                        <li ><Barra titulo='Html' cor='blue' porcentagem='90'></Barra></li>
                        <li ><Barra titulo='CSS' cor='blue' porcentagem='75'></Barra></li>
                        <li ><Barra titulo='JQuery' cor='blue' porcentagem='70'></Barra></li>
                    </div>
                </ul>

            </div>
        );
    }
}

export default indicadores;