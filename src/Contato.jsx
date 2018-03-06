import React from 'react'


class Contato extends React.Component {

    render() {
        return (
            <section id="contato">
                <h2 className='title'>CONTATO</h2>

                <h2 className='text-center'><a href="mailto:contato@devconf.tech">contato@devconf.tech</a></h2>
                <h2 className='text-center'><a href="tel:79998699813">79 9 9869-9813</a></h2>
            </section>
        )
    }
}

export default Contato