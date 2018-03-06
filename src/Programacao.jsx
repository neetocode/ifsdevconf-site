import React from 'react'

import programacao from './data/programacao.json'

class Programacao extends React.Component {
    state = {
        hiddenDias: {}
    }
    renderAtividade(atividade) {
        return (
            <div key={atividade.nome} className="palestra-container">
                <div className='header'>
                    <h4 className='horario'>
                        {atividade.horario}
                    </h4>
                    <h3 className='nome'>
                        {atividade.nome}
                    </h3>
                </div>

            </div>
        )
    }

    renderPalestra(palestra) {

        return (
            <div key={palestra.nome} className={`palestra-container${palestra.aDefinir ? ' aDefinir' : ''}`}>
                <div className='header'>
                    <h4 className='horario'>
                        {palestra.horario}
                    </h4>
                    <h3 className='nome'>
                        {palestra.nome}
                    </h3>
                </div>

                {/* <div className='descricao'>
                    {palestra.descricao}
                </div> */}

                <div className='palestrante'>
                    <img src={palestra.palestrante.img} />
                    <h3 className='nome'>
                        {palestra.palestrante.nome}
                    </h3>

                    {!palestra.aDefinir && (
                        <div className='contatos'>
                            <a href="#">
                                <i className='fa fa-twitter-square'></i>
                            </a>

                            <a href="#">
                                <i className='fa fa-github'></i>
                            </a>

                            <a href="#">
                                <i className='fa fa-instagram'></i>
                            </a>

                            <a href="#">
                                <i className='fa fa-linkedin'></i>
                            </a>

                            <a href="#">
                                <i className='fa fa-envelope'></i>
                            </a>
                        </div>
                    )}
                </div>



            </div>
        )
    }

    toggleDia(dia) {
        const { hiddenDias } = this.state
        this.setState({ hiddenDias: { ...hiddenDias, [dia]: !hiddenDias[dia] } })
    }

    renderDia(programacaoDia) {
        const { hiddenDias } = this.state
        const programacao = programacaoDia.programacao
        return (
            <div key={programacaoDia.dia} className="column">
                <div className="card programacao-container">
                    <header className="card-header">
                        <div className="card-header-title">
                            <h3 className='title'>
                                {programacaoDia.dia} Abril <small>({programacaoDia.diaLabel})</small>
                            </h3>
                        </div>
                        <a href="javascript:void(0)" onClick={() => this.toggleDia(programacaoDia.dia)} className="card-header-icon show-xs" aria-label="more options">
                            <span className="icon">
                                {
                                    hiddenDias[programacaoDia.dia] ?
                                        <i className="fa fa-angle-up" aria-hidden="true"></i>
                                        :
                                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                                }

                            </span>
                        </a>
                    </header>

                    {hiddenDias[programacaoDia.dia] ?
                        null
                        :
                        <div className="card-content">
                            {
                                programacao.map(atividade =>
                                    atividade.palestra ?
                                        this.renderPalestra(atividade)
                                        :
                                        this.renderAtividade(atividade)
                                )
                            }
                        </div>

                    }
                </div>
            </div>
        )
    }

    render() {
        const dias = [programacao[0], programacao[1], programacao[2]]

        return (
            <section id="programacao">

                <h2 className='title'>PROGRAMAÇÃO</h2>

                <div className="container">
                    <div className="columns">
                        {dias.map(this.renderDia.bind(this))}
                    </div>
                </div>


            </section>
        )
    }
}

export default Programacao