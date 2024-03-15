import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BaseColaboradores } from './BaseColaboradores';
import Listado from './Components/Listado';
import Formulario from './Components/Formulario';
import Alert from './Components/Alert';
import Buscador from './Components/Buscador';

const App = () => {
  const [message, setMessage] = useState('');
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [colaboradoresFiltrados, setColaboradoresFiltrados] = useState(colaboradores);

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
    setColaboradoresFiltrados([...colaboradores, nuevoColaborador]);
    setMessage('Colaborador registrado exitosamente');
  };

  const handleFiltrarColaboradores = (colaboradoresFiltrados) => {
    setColaboradoresFiltrados(colaboradoresFiltrados);
  };

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter(colaborador => colaborador.id !== id);
    setColaboradores(nuevosColaboradores);
    setColaboradoresFiltrados(nuevosColaboradores);
  };

  return (
    <div className="contenedor">
      <div className="row">
        <Buscador colaboradores={colaboradores} onFiltrar={handleFiltrarColaboradores} />
      </div>
      <div className="row">
        <div className="col-md-8">
          <Listado colaboradores={colaboradoresFiltrados} eliminarColaborador={eliminarColaborador} />
        </div>
        <div className="col-md-4">
          <Formulario agregarColaborador={agregarColaborador} setMessage={setMessage} />
          <Alert message={message} />
        </div>
      </div>
    </div>
  );
}

export default App;