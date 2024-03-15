import React, { useState } from 'react';

const Buscador= ({ colaboradores, onFiltrar }) => {
  const [busqueda, setBusqueda] = useState('');

  const handleInputChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setBusqueda(searchTerm);

    const colaboradoresFiltrados = colaboradores.filter(colaborador =>
      colaborador.nombre.toLowerCase().includes(searchTerm)
    );
    onFiltrar(colaboradoresFiltrados);
  };

  return (
    <div className="encabezado">
    <h1>Lista de colaboradores</h1>
    <input
      type="text"
      placeholder="Busca un colaborador"
      value={busqueda}
      onChange={handleInputChange}
    />
    </div>
  );
}

export default Buscador;
