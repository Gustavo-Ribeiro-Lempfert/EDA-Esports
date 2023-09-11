import CampoTexto from '../CampoTexto/CampoTexto'
import './Formulario.css'

const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <CampoTexto label="Nick/nome" placeholder='Nome "Nick" Sobrenome' />
                <CampoTexto label="Posição" placeholder="Diga em qualposição o jogador deseja jogar" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da sua imagem" />
            </form>
        </section>
    )
}

export default Formulario