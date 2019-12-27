import React, { Component } from 'react';

class texto extends Component {
    render() {
        return (
            <div className='texto-principal fonte-secundaria'>
                <h1 className='display-5 mb-4'>{this.props.titulo}</h1>
                <p className='text-justify '>{this.props.children}
            </p>
            </div>
        );
    }
}

export default texto;