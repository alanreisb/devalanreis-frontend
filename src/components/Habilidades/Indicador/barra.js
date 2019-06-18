import React, { Component } from 'react';

class barra extends Component {
    render() {
        return (
            <div className='text-left mt-0 mb-2 w-100  m-0 p-0' style={{backgroundColor:'black',borderColor:'black', height:'60%!important'}}>
                
                <div class="row"  >
                    <div class="col-md-10" >
                        <div class={`progress ${this.props.cor}`} style={{height:'70%'}}>
                            <h3 class="progress-title">{this.props.titulo}</h3>
                            <div class="progress-bar">
                                <div class="progress-value" style={{width: `${this.props.porcentagem}%` }}>{this.props.porcentagem}%</div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>

        );
    }
}

export default barra;