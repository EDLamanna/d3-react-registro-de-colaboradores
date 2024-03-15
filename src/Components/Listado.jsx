import React from 'react';
import Table from 'react-bootstrap/Table';

const Listado = ({ colaboradores, eliminarColaborador }) => {
  const handleEliminar = (id) => {
    eliminarColaborador(id);
  };

  return (
    <div className="colaboradores">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {colaboradores.map((colaborador) => (
            <tr key={colaborador.id}>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td>
              <td>
                <button className='btn btn-danger' onClick={() => handleEliminar(colaborador.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Listado;
