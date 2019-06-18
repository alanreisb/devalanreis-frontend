import React, { Component } from 'react';


//Classe
class Titulo extends Component {
    render() {

        return (
            <div className='titulo-container'>
                <div className='titulo' >

                    <p className='digitacao'>Alan Reis</p>
                    <p className='digitacao delays-1_5s'>  Desenvolvedor</p>
                    <p className='digitacao delays-3s'>Front-end</p>
                </div>
                <div className='subtitulo text-left m-0 animated fadeInUp slower delays-5s'>

                    <p className='text-left' >REACTJS - NODEJS - .NET</p>
                </div>

            </div>
        );
    }
}
export default Titulo;