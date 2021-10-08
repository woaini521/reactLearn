import "./App.css";

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  IndexRoute,
  Switch,
} from "react-router-dom";
import Dva from "./pages/Dva";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    obj: {
      name: "小熊啊",
    },
  };
  render() {
    return (
      <ThemContext.Provider value={this.state.obj}>
        <Router>
          <Switch>
            <Route path="/" component={Dva}></Route>
          </Switch>
        </Router>
      </ThemContext.Provider>
    );
  }
}

export default App;
