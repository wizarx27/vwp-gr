import React from 'react';  
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ViewSinger from './Singer/ViewSinger';
import Home from './Singer/Home';
import AddSinger from './Singer/AddSinger';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/singer/add">
          <AddSinger />
        </Route>
        <Route path="/singer/view/:id">
          <ViewSinger />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
