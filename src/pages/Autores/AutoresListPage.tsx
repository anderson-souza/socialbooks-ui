import * as React from "react";
import Table from "react-bootstrap/Table";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import api from "../../service/api";
import { useState, useEffect } from "react";
import DialogConfirmacao from "../../components/DialogConfirmacao";
import { deletarAutor } from "../../service/AutorService";

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

  const onClickDeleteAutor = (id: string) => {
    DialogConfirmacao(
      "Atenção",
      "Deseja Excluir o Autor?",
      "warning",
      "Excluir",
      () => {
        deletarAutor(id)
          .then(() => {
            setAutores(autores.filter((autores) => autores["id"] !== id));
            alert("Sucesso viado");
          })
          .catch((error) => console.log(error));
      }
    );
  };

  return (
    <>
      <Button variant='success' href={`autores/NEW`}>
        Novo Autor
      </Button>

      <Table responsive striped bordered hover>
        <thead style={{ paddingTop: 20 }}>
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
                  <Button
                    variant='danger'
                    onClick={() => onClickDeleteAutor(row.id)}>
                    Excluir
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
