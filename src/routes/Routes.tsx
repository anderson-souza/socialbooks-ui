import * as React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import HomePage from "../pages/home-page/HomePage";
import Header from "../components/Header";
import AutoresListPage from "../pages/Autores/AutoresListPage";
import Container from "react-bootstrap/Container";

export default function Routes() {
  return (
    <Router>
      <Header />
      <Container fluid>
        <Switch>
          <Route path='/autores' component={AutoresListPage} />
          <Route component={HomePage} />
        </Switch>
      </Container>
    </Router>
  );
}
