import React, { Component } from 'react';
//Componentes
import MenuLateral from '../components/Todas/MenuLateral';
import FormMessage from '../components/Contatos/form-message';
//Imagens
import Localizacao from '../components/imagens/contatos/placeholder.png';
import fbIcon from '../components/imagens/icones contato/facebook.png';
import wpIcon from '../components/imagens/icones contato/whatsapp.png';
import lkIcon from '../components/imagens/icones contato/linkedin.png';
//Classes
const contatosLocalizacaoClasse = 'fonte-secundaria pt-4 mt-0 text-center ';
const contatosLocalizacaoSecaoClasse = ' pl-0 text-left mt-3';
const contatosLocalizacaoTituloClasse = 'w-75 pl-0 text-left text-light font-weight-bold mt-0 d-flex flex-row ';
const contatosLocalEndereco = 'text-justify mt-3 fonte-secundaria font-weight-bold endereco';
const contatosLocalIcones = 'flex-row d-flex text-light m-0 mt-3 mb-4 ml-0 p-0';
const contatosLocalIcone = 'p-2';

const principalClasses = 'w-100 h-100 m-0 p-0 ';


class Contatos extends Component {
    render() {
        return (
            <div className={`${principalClasses}  pagina-secundaria`}>
                <MenuLateral></MenuLateral>
                <div className={`contatos-localizacao ${contatosLocalizacaoClasse}`}>
                    <div className={`secao ${contatosLocalizacaoSecaoClasse}`} >
                        <div className={`titulo ${contatosLocalizacaoTituloClasse}`} >
                            <img src={Localizacao} className='icone mr-3 animated fadeInDown' />
                            <h2 className=''> Localização </h2> </div>

                        <p className={contatosLocalEndereco} >Cidade: Piquete-SP<br />
                            CEP: 12.620-000<br />
                            Tel: (12) 3156-4898<br />
                            Cel / WhatsApp: (12) 98250-1585<br /></p>

                        <ul className={contatosLocalIcones}>
                            <li className={contatosLocalIcone}>
                                <a href='https://www.facebook.com/devalanreis' target='_blank'>
                                    <img src={fbIcon} className='icones-contato' ></img>
                                </a>
                            </li>
                            <li className={contatosLocalIcone}>
                                <a href='https://www.linkedin.com/in/alanreisb' target='_blank'>
                                    <img src={lkIcon} className='icones-contato' ></img>
                                </a>
                            </li>
                            <li className={contatosLocalIcone}>
                                <a href='tel:(12)98250-1585'>
                                    <img src={wpIcon} className='icones-contato' title='(12)98250-1585'>
                                    </img>
                                </a>
                            </li>
                        </ul>

                        <iframe className='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117888.9197057426!2d-45.25190273647298!3d-22.57802836110393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccba25567987bd%3A0x92b702e677e1cb47!2sPiquete+-+SP%2C+12620-000!5e0!3m2!1spt-BR!2sbr!4v1559961653681!5m2!1spt-BR!2sbr"  height="250px" frameborder="0" allowfullscreen></iframe>

                    </div>
                </div>
                <FormMessage></FormMessage>
            </div>

        );
    }
}

export default Contatos;