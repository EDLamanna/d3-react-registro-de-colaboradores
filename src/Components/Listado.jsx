import { useState } from "react";
import Table from "react-bootstrap/Table";
import { BaseColaboradores } from "../BaseColaboradores";

function Listado() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  // const [colaborador, setColaborador] = useStatue("")

  return (
    <Table striped bordered hover size="sm" className="mt-4">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Teléfono</th>
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
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Listado;