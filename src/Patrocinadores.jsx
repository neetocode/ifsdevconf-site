import React from 'react'

import imgBronze from './../src/assets/bronze.jpg'
import imgPrata from './../src/assets/prata.jpg'
import imgOuro from './../src/assets/ouro.jpeg'

import patrocinadores from './data/patrocinadores.json'

const COTAS = {
    OURO: 'OURO',
    PRATA: 'PRATA',
    BRONZE: 'BRONZE',
}
class Patrocinadores extends React.Component {
    state = {
        ouro: [],
        prata: [],
        bronze: []
    }
    componentWillMount() {
        this.setState({
            ouro: patrocinadores.filter(patro => patro.cota == COTAS.OURO),
            prata: patrocinadores.filter(patro => patro.cota == COTAS.PRATA),
            bronze: patrocinadores.filter(patro => patro.cota == COTAS.BRONZE),
        })
    }

    renderPatrocinador(patrocinador) {

        return (
            <div key={patrocinador.nome} className='patrocinador'>

                <a href={patrocinador.url} target="_blank">
                    <img src={patrocinador.imagem} alt={patrocinador.nome} />
                </a>
            </div>
        )
    }

    render() {
        const { ouro, prata, bronze } = this.state;

        return (
            <section id="patrocinadores">
                <h2 className='title'>PATROCINADORES</h2>

                <div className="container">
                    <div className="patrocinadores-container">
                        <div className="header">
                            <img src={imgBronze} className='img-cota' />
                            <h2>Bronze</h2>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="patrocinadores-container">
                        <div className="header">
                            <img src={imgPrata} className='img-cota' />
                            <h2>Prata</h2>
                        </div>

                    </div>
                    <div className="patrocinadores-container">
                        <div className="header">
                            <img src={imgOuro} className='img-cota' />
                            <h2>Ouro</h2>
                        </div>
                        <div className="patrocinadores">
                            {ouro.map(this.renderPatrocinador.bind(this))}
                        </div>
                    </div>
                </div>


            </section>
        )
    }
}

export default Patrocinadores