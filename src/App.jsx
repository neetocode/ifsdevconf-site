import React from 'react'




import Brand from './Brand'
import Sobre from './Sobre'
import MainNav from './MainNav'
import Programacao from './Programacao'
import Patrocinadores from './Patrocinadores'
import Contato from './Contato'
import Apoio from './Apoio';


class App extends React.Component {

    componentWillMount() {
        this.setPaddingBody();
    }

    setPaddingBody() {
        const body = document.querySelector("body");
        console.log(body)
        body.style.paddingTop = `${window.innerHeight}px`;
    }

    renderInscricoes() {
        var now = new Date();


        var inicioInscricoes = new Date(Programacao.inscricoes.start);
        var fimInscricoes = new Date(Programacao.inscricoes.end);


        if (now > inicioInscricoes && now < fimInscricoes)
            return (
                <a href="http://publicacoes.ifs.edu.br/index.php/eventos" target="_blank" id="btn-inscricoes">
                    <span>Inscreva-se</span>
                    <small>É gratis!</small>
                </a>
            )

        return null

    }

    render() {
        return (
            <div>
                {this.renderInscricoes()}
                <Brand />
                <MainNav />
                <Sobre />
                <Programacao />
                <Patrocinadores />
                <Apoio />
                <Contato />

                <footer>
                    <a target="_target" href="https://github.com/neetocode/ifsdevconf-site">

                        <p className='text-center'>
                            Contribua com o site
                            {` `}
                            <i className="fab fa-github"></i>
                            <br />
                            <i className="fas fa-heart" style={{ color: 'red' }}></i>
                        </p>
                    </a>
                </footer>
            </div>
        )
    }
}



export default App

