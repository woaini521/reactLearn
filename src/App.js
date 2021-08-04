import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  IndexRoute,
  Switch,
} from "react-router-dom";
import Test1 from "./pages/test1";
import NameSlot from "./pages/nameslot";
import Communication from "./pages/communication";
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
            <Route path="/" component={NameSlot}></Route>
            <Route path="/Communication" component={Communication}></Route>
            <Route path="/test" component={Test1}></Route>
          </Switch>
        </Router>
      </ThemContext.Provider>
    );
  }
}

export default App;
