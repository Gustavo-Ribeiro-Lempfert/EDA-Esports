import { useState } from 'react';
import Formulario from './componentes/Formulario/Formulario';
import Banner from './componentes/banner/banner';

function App() {

  const [jogadores, setJogador] = useState([])

  const aoNovoJogadorAdicionado = (jogador) =>{
    console.log(jogador);
    setJogador([...jogadores, jogador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)}/>
    </div>
  );
}

export default App;
