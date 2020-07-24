/* eslint-disable no-unused-vars */
import * as React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { RouteComponentProps } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../service/api";

type IProps = RouteComponentProps<{ id: string }>;

export default function AutoresFormPage(props: IProps) {
  const [autor, setautor] = useState();

  const { id } = props.match.params;

  useEffect(() => {
    if (id !== "NEW") {
      console.log("Bora carregar ai");
      loadAutor(id);
    }
  }, []);

  async function loadAutor(id: string) {
    await api
      .get("autores/" + id)
      .then((response) => {
        const { data } = response;
        setautor(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const formatarData = () => {};

  return (
    <Form>
      <Form.Group controlId='formGroupNome'>
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type='text'
          placeholder='Informe o nome'
          value={autor?.nome}
        />
      </Form.Group>

      <Row>
        <Col>
          <Form.Group controlId='formGroupNascimento'>
            <Form.Label>Nascimento</Form.Label>
            <Form.Control
              type='date'
              placeholder='Informe a data de nascimento'
              value={autor?.nascimento}
            />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group controlId='formGroupNacionalidade'>
            <Form.Label>Nacionalidade</Form.Label>
            <Form.Control
              type='text'
              placeholder='Informe a nacionalidade'
              value={autor?.nacionalidade}
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}
