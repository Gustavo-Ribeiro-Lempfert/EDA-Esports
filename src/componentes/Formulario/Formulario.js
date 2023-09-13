import { useState } from 'react'
import Botao from '../Botao/Botao'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {


    const [nome, setNome] = useState('')
    const[posicao, setPosicao] =useState('')
    const [imagem, setimagem] = useState('')
    const[time, setTime] = useState('')

    const aoSAlvar = (evento) =>{
        evento.preventDefault()
        props.aoJogadorCadastrado({
            nome,
            posicao,
            imagem,
            time
        })
        setNome('')
        setPosicao('')
        setimagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSAlvar}>
                <CampoTexto 
                obrigatorio={true} 
                label="Nick/nome" 
                placeholder='Nome "Nick" Sobrenome' 
                valor={nome} 
                aoAlterado={valor => setNome(valor)}
                />
                 <CampoTexto 
                label="posicao" 
                placeholder="Digite a posição do jogador" 
                valor={posicao} 
                aoAlterado={valor => setPosicao(valor)}
                />
                <CampoTexto 
                label="Imagem" 
                placeholder="Digite o endereço da sua imagem" 
                valor={imagem} 
                aoAlterado={valor => setimagem(valor)}
                />
                <ListaSuspensa 
                obrigatorio={true}
                itens={props.times} 
                label="time" 
                placeholder="Diga em qual time o jogador vai jogar" 
                valor={time} 
                aoAlterado={valor => setTime(valor)}
                />
                <Botao texto="Cadastrar jogador"/>
            </form>
        </section>
    )
}

export default Formulario