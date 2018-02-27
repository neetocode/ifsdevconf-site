import React from 'react'

import palestras from './data/palestras.json'


class Programacao extends React.Component {

    renderPalestra(palestra) {

        return (
            <div key={palestra.id} className="row">
                <div className={`col-xs-12`}>
                    <div className="box">
                        <img className="palestrante-img" src={palestra.palestrante.img} />
                        <h4 className="palestra-nome">{palestra.nome}</h4>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const palestrasDia03 = palestras.filter(palestra => palestra.dia == '03')

        return (
            <section id="programacao">

                <h2>PROGRAMAÇÃO</h2>

                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="box">
                                <h3>03 Abril</h3>

                                {palestrasDia03.map(this.renderPalestra.bind(this))}
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        )
    }
}

export default Programacao