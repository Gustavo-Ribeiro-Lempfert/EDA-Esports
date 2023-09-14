import './Jogador.css'

const Jogador = ({nome, imagem, posicao, corDeFundo, aoDeletar}) => {

        return(
        <div className='jogador'>
            <div className='deletar' onClick={aoDeletar}>Deletar</div>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{posicao}</h5>
            </div>
        </div>
        )
}

export default Jogador