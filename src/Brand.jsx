import React from 'react'
import Particles from 'react-particles-js';
import configParticle from './config/particles.json'
import logoAnimated from './assets/logo-animated.svg'

class Brand extends React.Component {

    render() {
        return (
            <header id="brand">
                <div id="fill-top"></div>

                <Particles
                    className="particles-js"
                    params={configParticle}
                />

                <img id="img-logo" src={logoAnimated} />
                <ul className="social-container">
                    <li>
                        <a href="https://www.instagram.com/devconftech/" target="_blank"><i className="fa fa-instagram"></i> devconftech</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/devconftech/" target="_blank"><i className="fa fa-facebook-square"></i> devconftech</a>
                    </li>
                    <li>
                        <a href="mailto:contato@devconf.tech" target="_blank"><i className="fa fa-envelope"></i> contato@devconf.tech</a>
                    </li>
                </ul>

                <h4 className="dias-evento">3, 4 e 5 de Abril</h4>
            </header>
        )
    }
}

export default Brand