import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';

import api from './services/api'

function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({});
  //tornou a função assíncrona  com o async
  async function handleSearche(){
    if (input === ''){
      alert("Preencha com algum CEP")
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput("")
    
    }catch{
      alert("OH NÃO ): Parece que este CEP não existe...");
      setInput("")
    }

  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input 
        type="text"
        placeholder="Digite seu cep..."
        value={input}
        //pegando o valor de entrada 
        onChange={(e) => setInput(e.target.value)}
        />
        
        <button className="buttonSearch" onClick={handleSearche}>
          <FiSearch size={25} color='#FFF'/>
        </button>

      </div>

      <main className='main'>
      <h2>CEP: {cep.cep}</h2>

      <span>{cep.logradouro}</span>
      <span>{cep.complemento}</span>
      <span>{cep.bairro}</span>
      <span>{cep.localidadew} - {cep.uf}</span>
      </main>

    </div>
  );
}

export default App;
