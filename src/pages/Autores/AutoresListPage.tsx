import * as React from "react";
import Table from "react-bootstrap/Table";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import api from "../../service/api";
import { useState, useEffect } from "react";

export default function AutoresListPage() {
  const [autores, setAutores] = useState([]);

  async function loadAutores() {
    await api
      .get("autores")
      .then((response) => {
        const { data } = response;
        setAutores(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    document.title = "Listagem de Autores";
    loadAutores();
  }, []);

  return (
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <td>Nome</td>
          <td>Nascimento</td>
          <td>Nacionalidade</td>
          <td>Ações</td>
        </tr>
      </thead>
      <tbody>
        {autores?.map((row: any) => (
          <tr key={row.id}>
            <td>{row.nome}</td>
            <td>{row.nascimento}</td>
            <td>{row.nacionalidade}</td>
            <td>
              <ButtonGroup>
                <Button variant='warning' href={`autores/${row.id}`}>
                  Editar
                </Button>
                <Button variant='danger'>Excluir</Button>
              </ButtonGroup>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
