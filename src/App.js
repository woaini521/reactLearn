import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  IndexRoute,
  Switch,
} from "react-router-dom";
import reduxsaga from "./pages/reduxsaga";
import ThemContext from "./context";
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
            <Route path="/" component={reduxsaga}></Route>
          </Switch>
        </Router>
      </ThemContext.Provider>
    );
  }
}

export default App;
