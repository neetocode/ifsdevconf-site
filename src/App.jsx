import React from 'react'




import Brand from './Brand'
import Programacao from './Programacao'
import Sobre from './Sobre'


class App extends React.Component {


    componentWillMount() {

        // console.log(ParticleJs)
        // ParticleJs.load('particles-js', configParticle);

        // const brand = document.getElementById("brand");

        // window.addEventListener("resize", this.setPaddingBody);

        //  window.addEventListener("scroll", function () {

        // })

        // this.setPaddingBody();
    }


    setPaddingBody() {
        const body = document.querySelector("body");
        body.style.paddingTop = `${window.innerHeight}px`;
    }

    render() {
        return (
            <div>

                <Brand/>
                <Programacao />
                <Sobre />
            </div>
        )
    }
}



export default App

