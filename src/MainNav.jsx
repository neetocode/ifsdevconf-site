import React from 'react'


class MainNav extends React.Component {

    render() {
        return (
            <nav id="main-nav">

                <a href="#sobre" className="hidden-xs">SOBRE</a>

                <a href="#programacao" className="hidden-xs">PROGRAMAÇÃO</a>

                <a href="#patrocinadores" className="hidden-xs">PATROCINADORES</a>

                <a href="#contato" className="hidden-xs">CONTATO</a>

                <a href="javascript:void(0)" className="show-xs flex">MENU</a>
            </nav>
        )
    }
}

export default MainNav