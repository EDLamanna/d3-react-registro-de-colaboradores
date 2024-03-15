import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formulario = ({ agregarColaborador, setMessage }) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");

  const validateSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !correo || !edad || !cargo || !telefono) {
      setMessage("Completa todos los campos!");
      return;
    }

    const nuevoColaborador = {
      id: uuidv4(),
      nombre: nombre,
      correo: correo,
      edad: edad,
      cargo: cargo,
      telefono: telefono,
    };

    agregarColaborador(nuevoColaborador);
    setNombre("");
    setCorreo("");
    setEdad("");
    setCargo("");
    setTelefono("");

    setMessage("Colaborador agregado");
  };

  return (
    <div className="formulario">
      <h2 className="title">Agregar Colaborador</h2>
      <Form onSubmit={validateSubmit}>
        <Form.Group className="mb-2 px-5" controlId="formBasicName">
          <Form.Control
            type="name"
            placeholder="Nombre del colaborador"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </Form.Group>

        <Form.Group className="mb-2 px-5" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="email del colaborador"
            onChange={(e) => setCorreo(e.target.value)}
            value={correo}
          />
        </Form.Group>

        <Form.Group className="mb-2 px-5" controlId="formBasicPassword">
          <Form.Control
            type="text"
            placeholder="Edad del colaborador"
            onChange={(e) => {
              const input = e.target.value;

              if (/^\d*$/.test(input) || input === "") {
                setEdad(input);
              }
            }}
            value={edad}
            pattern="[0-9]*"
          />
        </Form.Group>

        <Form.Group className="mb-2 px-5" controlId="formBasicCharge">
          <Form.Control
            type="text"
            placeholder="Cargo del colaborador"
            onChange={(e) => setCargo(e.target.value)}
            value={cargo}
          />
        </Form.Group>

        <Form.Group className="mb-2 px-5" controlId="formBasicTelefono">
          <Form.Control
            type="text"
            placeholder="Teléfono del colaborador"
            onChange={(e) => setTelefono(e.target.value)}
            value={telefono}
          />
        </Form.Group>
        <div className="text-center">
          <Button className="btn my-3 mx-5" variant="primary" type="submit">
            Agregar colaborador
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Formulario;