import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
//Estilo BootStrap
const menuClasse = 'w-100 navbar navbar-dark navbar-expand-sm p-0 m-0 shadow p-0';
const menuListaClasse = 'navbar-nav p-0  m-0 ml-auto float-right p-3';
const menuLiClasse = 'nav-item text-center p-3';




class navPrincipal extends Component {
  render() {

    return (
      <nav className={`menu-principal ${menuClasse}`} >
        <ul className={`lista ${menuListaClasse}`}>

          <li class={`item ${menuLiClasse}`} >
            <Link to="/sobre" class='nav-link'  >Sobre Mim</Link>

          </li>
          <li class={`item ${menuLiClasse}`} >
            <Link to="/habilidades" class='nav-link'>Habilidades</Link >
          </li>
          <li class={`item ${menuLiClasse}`} >
            <Link to="/portfolio" class='nav-link'>Portfolio</Link >
          </li>
          <li class={`item ${menuLiClasse}`} >
            <Link to="/contatos" class='nav-link'>Contatos</Link >
          </li>

        </ul>
      </nav>

    );
  }
}
export default navPrincipal;