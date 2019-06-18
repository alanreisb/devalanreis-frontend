import React, { Component } from 'react';
import Envelope from '../imagens/icones contato/envelope.svg';
require('dotenv').config();
const axios = require('axios');
//Imagem



//Classes
const formClasse = 'p-4 mt-0 text-left fonte-secundaria ';
const formTituloClasse = 'w-100 d-flex flex-row';
const labelClass = 'mt-3 mb-0 ';
const botaoClasse = 'btn btn-secondary float-right  btn-lg col-4';



class FormMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            email: "",
            mensagem: ""
        }

        // This binding is necessary to make `this` work in the callback
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]:e.target.value});
    };


    handleSubmit(e) {

        e.preventDefault();
        console.log(`${process.env.REACT_APP_API_URL}`);
        axios.post(`${process.env.REACT_APP_API_URL}`, {
            nome: this.state.nome,
            email: this.state.email,
            mensagem: this.state.mensagem
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    render() {
        return (
            <div className={`form-mensagem ${formClasse}`} >
                <form id='form-contato' className='formulario' onSubmit={this.handleSubmit}>
                    <div className={`${formTituloClasse} titulo-form`}>
                        <img id='letter' src={Envelope} className='icone-form mr-4 animated fadeInLeft' ></img>
                        <h2 className='mr-3 mt-3'>Entre em contato</h2>
                    </div>
                    <h4 className='subtitulo fonte-secundaria text-left'>Deixe sua mensagem...</h4>

                    <label for='nome' className={`etiqueta ${labelClass}`}>Nome</label>
                    <br />
                    <input type='text' name='nome' className='col-10 p-2 rounded' onChange={this.handleChange}></input>
                    <br />


                    <label for='email' className={`etiqueta ${labelClass}`}>Email</label>
                    <br />
                    <input type='email' name='email' className='col-10 p-2 rounded' onChange={this.handleChange}></input>
                    <br />
                    <label for='mensagem' className={`etiqueta ${labelClass}`}>Mensagem</label>
                    <textarea name='mensagem' className='col-11 p-2 rounded' rows='4' style={{ resize: 'none' }} onChange={this.handleChange} ></textarea>

                    <input type='submit' className={`form-botao ${botaoClasse}`} ></input>

                </form>
            </div>
        );
    }
}

export default FormMessage;