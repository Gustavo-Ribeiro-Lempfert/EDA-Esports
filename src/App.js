import { useState } from 'react';
import Formulario from './componentes/Formulario/Formulario';
import Banner from './componentes/banner/banner';
import Time from './componentes/Time/Times';

function App() {

  const times = [
    {
      nome: 'Urubu do pix',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Malevolentes',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Desgusta X',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Esquema de aposta',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    }
  ]

  const [jogadores, setJogador] = useState([])

  const aoNovoJogadorAdicionado = (jogador) =>{
    console.log(jogador);
    setJogador([...jogadores, jogador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)}/>

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        jogadores={jogadores.filter(jogador => jogador.time === time.nome)}/>)}

    </div>
  );
}

export default App;
