import React from 'react'

import bronze from './../src/assets/bronze.jpg'
import prata from './../src/assets/prata.jpg'
import ouro from './../src/assets/ouro.jpeg'

class Patrocinadores extends React.Component {

    render() {
        return (
            <section id="patrocinadores">
                <h2 className='title'>PATROCINADORES</h2>

                <div className="container">
                    <div className="patrocinadores-container">
                        <div className="header">
                            <img src={bronze} className='img-cota' />
                            <h2>Bronze</h2>
                        </div>
                    </div>
                    <div className="patrocinadores-container">
                        <div className="header">
                            <img src={prata} className='img-cota' />
                            <h2>Prata</h2>
                        </div>

                    </div>
                    <div className="patrocinadores-container">
                        <div className="header">
                            <img src={ouro} className='img-cota' />
                            <h2>Ouro</h2>
                        </div>
                    </div>
                </div>


            </section>
        )
    }
}

export default Patrocinadores