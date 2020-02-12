import React, { useState } from 'react';

function App() {

  const [lista, setLista] = useState(['leche', 'huevos', 'pan']);
  const [nuevoItem, setNuevoItem] = useState();

  const guardarItem = evento => {
    setNuevoItem(evento.target.value);
  };

  const agregarItem = () => {
    const nuevaLista = lista;
    nuevaLista.push(nuevoItem);
    setLista(nuevaLista);
  };

  return (
    <div className="App">
      <h1>Lista</h1>
      <ul>
        {
          lista.map((item) => {
            return (
              <li>
                {item}
              </li>
            )
          })
        }
      </ul>
      <div>
        <input
          type="text"
          placeholder="nuevo elemento"
          onChange={guardarItem} />
        <button onClick={agregarItem}>Agregar</button>
      </div>
    </div>
  );
}

export default App;
