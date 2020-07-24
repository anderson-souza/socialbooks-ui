import * as React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import HomePage from "../pages/home-page/HomePage";
import Header from "../components/Header";
import AutoresListPage from "../pages/Autores/AutoresListPage";
import Container from "react-bootstrap/Container";
import AutoresFormPage from "../pages/Autores/AutoresFormPage";

export default function Routes() {
  return (
    <Router>
      <Header />
      <br />
      <Container fluid>
        <Switch>
          <Route path='/autores' exact component={AutoresListPage} />
          <Route path='/autores/:id' exact component={AutoresFormPage} />
          <Route component={HomePage} />
        </Switch>
      </Container>
    </Router>
  );
}
