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

    render() {
        return (
            <div>

                <Brand />
                <MainNav />
                <Sobre />
                <Programacao />
                <Patrocinadores />
                <Apoio />
                <Contato />
            </div>
        )
    }
}



export default App

