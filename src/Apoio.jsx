import React from 'react'

import apoioDataSet from './data/apoio.json'

class Apoio extends React.Component {

    renderApoioSection(apoioItem, index) {
        return (
            <div className="apoio" key={apoioItem.nome}>
                <a href={apoioItem.url} target="_blank"> <img src={apoioItem.logo} alt={apoioItem.Nome} /></a>
            </div>
        )
    }

    render() {
        return (
            <section id="apoio">
                <h2 className='title'>APOIO</h2>


                <div className="container">
                    <div className="apoio-container">
                        {apoioDataSet.map(this.renderApoioSection.bind(this))}
                    </div>
                </div>
            </section>
        )
    }


    /*
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
            const { palestrante } = palestra
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
                    }
    
                    <div className='palestrante'>
                        <img src={palestrante.img} />
                        <h3 className='nome'>
                            {palestrante.nome}
                        </h3>
    
                        {!palestra.aDefinir && (
                            <div className='contatos'>
                                {palestrante.twitter && (
                                    <a href={`https://twitter.com/${palestrante.twitter}`} target='_blank' title='Twitter'>
                                        <i className='fa fa-twitter-square'></i>
                                    </a>
                                )}
    
                                {palestrante.github && (
                                    <a href={`https://github.com/${palestrante.github}`} target='_blank' title='GitHub'>
                                        <i className='fa fa-github'></i>
                                    </a>
                                )}
    
                                {palestrante.instagram && (
                                    <a href={`https://instagram.com/${palestrante.instagram}`} target='_blank' title='Instagram'>
                                        <i className='fa fa-instagram'></i>
                                    </a>
                                )}
    
                                {palestrante.linkedin && (
                                    <a href={`https://linkedin.com/in/${palestrante.linkedin}`} target='_blank' title='LinkedIn'>
                                        <i className='fa fa-linkedin'></i>
                                    </a>
                                )}
    
                                {palestrante.email && (
                                    <a href={`${palestrante.twitter}`} target='_blank' title='E-mail'>
                                        <i className='fa fa-envelope'></i>
                                    </a>
                                )}
    
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
        */
}

export default Apoio