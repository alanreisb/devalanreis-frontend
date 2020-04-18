import React, { Component } from 'react'
import Envelope from '../imagens/icones contato/envelope.svg'
// Funções
import { EnviarEmail } from '../../api/enviar-email'
// Classes
const formClasse = 'p-4 mt-0 text-left fonte-secundaria'
const formTituloClasse = 'w-100 d-flex flex-row'
const labelClass = 'mt-3 mb-0 '
const botaoClasse = 'btn btn-secondary float-right  btn-lg col-4'

class FormMessage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      nome: '',
      email: '',
      mensagem: ''
    }

    // This binding is necessary to make `this` work in the callback
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit (e) {
    e.preventDefault()
    EnviarEmail(this.state.nome, this.state.email, this.state.mensagem)
  }
  render () {
    return (
      <div className={`form-mensagem ${formClasse}`}>
        <form
          id='form-contato'
          className='formulario'
          onSubmit={this.handleSubmit}
        >
          <div className={`${formTituloClasse} titulo-form`}>
            <img
              id='letter'
              src={Envelope}
              className='icone-form mr-4 animated fadeInLeft'
            />
            <h2 className='mr-3 mt-3'>Entre em contato</h2>
          </div>
          <h4 className='subtitulo fonte-secundaria text-left'>
            Deixe sua mensagem...
          </h4>

          <label htmlFor='nome' className={`etiqueta ${labelClass}`}>
            Nome
          </label>
          <br />
          <input
            type='text'
            name='nome'
            className='col-10 p-2 rounded'
            onChange={this.handleChange}
          />
          <br />

          <label htmlFor='email' className={`etiqueta ${labelClass}`}>
            Email
          </label>
          <br />
          <input
            type='email'
            name='email'
            className='col-10 p-2 rounded'
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor='mensagem' className={`etiqueta ${labelClass}`}>
            Mensagem
          </label>
          <textarea
            name='mensagem'
            className='col-11 p-2 rounded'
            rows='4'
            style={{ resize: 'none' }}
            onChange={this.handleChange}
          />

          <input type='submit' className={`form-botao ${botaoClasse}`} />
        </form>
      </div>
    )
  }
}

export default FormMessage
