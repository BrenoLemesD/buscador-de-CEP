import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';

function App() {

  const [input, setInput] = useState('')

  function handleSearche(){
    alert("FOII")
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
      <h2>CEP: 14406523</h2>

      <span>Rua Teste algum</span>
      <span>Complemento: algum complemento</span>
      <span>Vila São Sebastião</span>
      <span>Franca - SP</span>
      </main>

    </div>
  );
}

export default App;
