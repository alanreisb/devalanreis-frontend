import React, { Component } from 'react';

class piramide extends Component {
    render() {
        return (
            <div className=' piramide-container'>
                <section className='piramide'>
                    <div className='side left'></div>
                    <div className='side front'></div>
                    <div className='side right'></div>
                    <div className='side back'></div>

                </section>
            </div>
        );
    }
}

export default piramide;