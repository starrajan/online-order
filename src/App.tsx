import React from "react";

import { Products, Category } from "./pages";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import { Navbar } from "./components";
import { MainContainer } from "./style";
function App() {
  return (
      
    <MainContainer>
      <Navbar />
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Category} />
          <Route exact path="/products" component={Products} />
        </Switch>
      </Router>
    </MainContainer>
  );
}

export default App;
