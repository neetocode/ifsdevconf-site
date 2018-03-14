import React from 'react'


import conhecimento from './assets/conhecimento.jpg'
import business from './assets/business.png'

class Sobre extends React.Component {
    // Will <- uma vez antes do render
    // Did <- uma vez depois do render

    // executa um vez só depois do primeiro render
    componentDidMount() {

        // const fadeBox = basicScroll.create({
        //     elem: document.querySelector('.img-proposta'),
        //     from: -500,
        //     to: 10,
        //     direct: true,
        //     // inside: (instance, percentage) => console.log('fadeBox is animating'),
        //     // outside: (instance, percentage) => console.log('fadeBox is not animating'),
        //     props: {
        //         'left': {
        //             from: .01,
        //             to: .99
        //         }
        //     }
        // })

        // fadeBox.start()
    }

    render() {
        return (
            <section id="sobre">

                <div className='container'>

                    <h2 className='title'>SOBRE</h2>

                    <p className='text'>
                        O IFS Dev Conf um evento, com recorrência anual, para abordar os assuntos relacionados com a área de computação.
                    </p>
                    



                    <p className='text'>
                        Com o objetivo de oferecer à comunidade (acadêmica ou não) do centro sul do estado de Sergipe a oportunidade de atualização de conhecimentos através da apresentação de tópicos relevantes e que estejam em evidência em computação e relacionadas com a temática da edição do evento.
                    </p>

                    <p className='text'>
                        Nesta edição serão trabalhados temas em programação, empreendedorismo e inovação, promovendo sua integração através da realização de palestras
                    </p>
                    <br />

                    <p className='text'>
                        Nossas propostas:
                    </p>

                    <br />



                    <div className="columns proposta">
                        <div className="column is-one-quarter">
                            <img className='img-proposta' src={conhecimento} />
                        </div>
                        <div className="column">
                            <h2>Atualização de conhecimento</h2>
                            <p className='text'>
                                Demonstrar a necessidade da atualização conhecimento nas áreas de informática, mais especificamente programação, para comunidade do centro sul do estado de Sergipe.
                            </p>
                        </div>
                    </div>

                    <div className="columns proposta">
                        <div className="column hidden-xs">
                            <h2>Oportunidades de negócio</h2>
                            <p className='text'>
                                Apresentar empresas e oportunidades de negócio para os estudantes de computação do centro sul de Sergipe.
                            </p>
                        </div>

                        <div className="column is-one-quarter">
                            <img className='img-proposta' src={business} />
                        </div>

                        <div className="column show-xs">
                            <h2>Oportunidades de negócio</h2>
                            <p className='text'>
                                Apresentar empresas e oportunidades de negócio para os estudantes de computação do centro sul de Sergipe.
                            </p>
                        </div>
                    </div>
                    <h2 className='title'>DIA E LOCAL</h2>                    
                    <p className='text'>O evento está planejado para ser realizado nos dias 3, 4 e 5 de Abril no auditório do Instituto Federal de Sergipe (IFS) - Campus Lagarto, localizado na Rodovia Lourival Batista, no Povoado Carro Quebrado, Lagarto - SE.</p>
                   
                </div>


            </section >
        )
    }
}

export default Sobre