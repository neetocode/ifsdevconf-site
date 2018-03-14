import React from 'react'
import config from '../package.json'

class MainNav extends React.Component {
    renderInscricoes(){
        var now = new Date();
            

        var inicioInscricoes = new Date(config.inscricoes.start);
        var fimInscricoes = new Date(config.inscricoes.end);
        if ( now > inicioInscricoes && now < fimInscricoes ){
            return(
                <a href="http://publicacoes.ifs.edu.br/" target="_blank" className="hidden-xs">INSCRIÇÕES</a>
            )
        }
        else { return }

    }
    render() {
        return (
            <nav id="main-nav">

                <a href="#sobre" className="hidden-xs">SOBRE</a>
                <a href="#programacao" className="hidden-xs">PROGRAMAÇÃO</a>
                { this.renderInscricoes()}
                <a href="#patrocinadores" className="hidden-xs">PATROCINADORES</a>                                
                <a href="#apoio" className="hidden-xs">APOIO</a>
                <a href="#contato" className="hidden-xs">CONTATO</a>
                <a href="javascript:void(0)" className="show-xs flex">MENU</a>
            </nav>
        )
    }
}

export default MainNav