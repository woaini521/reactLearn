import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  IndexRoute,
  Switch,
} from "react-router-dom";
import Test1 from "./pages/test1";
import Dva from "./pages/Dva";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Test1}></Route>
          <Route path="Dva" component={Dva}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
