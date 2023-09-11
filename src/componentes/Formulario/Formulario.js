import { useState } from 'react'
import Botao from '../Botao/Botao'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {


    const posicoes = [
        'Top',
        'Jungle',
        'Mid',
        'Atirador',
        'Suporte'
    ]

    const [nome, setNome] = useState('')
    const [posicao, setposicao] = useState('')
    const [imagem, setimagem] = useState('')

    const aoSAlvar = (evento) =>{
        evento.preventDefault()
        props.aoJogadorCadastrado({
            nome,
            posicao,
            imagem
        })
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
                <ListaSuspensa 
                itens={posicoes} 
                label="posicao" 
                placeholder="Diga em qualposição o jogador deseja jogar" 
                valor={posicao} 
                aoAlterado={valor => setposicao(valor)}
                />
                <CampoTexto 
                label="Imagem" 
                placeholder="Digite o endereço da sua imagem" 
                valor={imagem} 
                aoAlterado={valor => setimagem(valor)}
                />
                <Botao texto="Cadastrar jogador"/>
            </form>
        </section>
    )
}

export default Formulario