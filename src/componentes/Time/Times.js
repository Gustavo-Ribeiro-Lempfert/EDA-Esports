import Jogador from '../../Jogador/Jogador'
import './Times.css'

const Time = (props) => {

    return (
        <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='jogadores'>  
                {props.jogadores.map(jogador => <Jogador  nome={jogador.nome} imagem={jogador.imagem} posicao={jogador.posicao}/>)}
            </div>
        </section>
    )
}

export default Time