import Botao from '../Botao/Botao'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import './Formulario.css'

const Formulario = () => {

    const posicoes = [
        'Top',
        'Jungle',
        'Mid',
        'Atirador',
        'Suporte'
    ]
    return (
        <section className='formulario'>
            <form>
                <CampoTexto label="Nick/nome" placeholder='Nome "Nick" Sobrenome' />
                <ListaSuspensa itens={posicoes} label="posicao" placeholder="Diga em qualposição o jogador deseja jogar"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da sua imagem" />
                <Botao texto="Cadastrar jogador"/>
            </form>
        </section>
    )
}

export default Formulario