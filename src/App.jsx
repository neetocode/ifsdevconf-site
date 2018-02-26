import React from 'react'




import Brand from './Brand'
import Sobre from './Sobre'
import MainNav from './MainNav'
import Programacao from './Programacao'
import Patrocinadores from './Patrocinadores'
import Contato from './Contato'


class App extends React.Component {


    componentWillMount() {

        // console.log(ParticleJs)
        // ParticleJs.load('particles-js', configParticle);

        // const brand = document.getElementById("brand");

        // window.addEventListener("resize", this.setPaddingBody);

        //  window.addEventListener("scroll", function () {

        // })

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
                <Contato />
            </div>
        )
    }
}



export default App

