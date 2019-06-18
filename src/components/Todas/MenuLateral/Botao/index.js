import React, { Component } from 'react';

const botaoClasse = 'w-100 h-100 botao-lateral text-center';

class botao extends Component {
    render() {
        return (
            <button className={botaoClasse} style={{ backgroundImage: `url(${this.props.background})`}}>{this.props.children}</button>
        );
    }
}

export default botao;