import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components";
import Resume from "./components/Resume2";
import Navbar from "./components/Navbar";
import Resume2 from "./components/Resume2";
import Resume3 from "./components/Resume3";
import Resume4 from "./components/Resume4";
import Resume5 from "./components/Resume5";
import Resume6 from "./components/Resume6";
import Resume7 from "./components/Resume7";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resume2" component={Resume2} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/resume3" component={Resume3} />
        <Route exact path="/resume4" component={Resume4} />
        <Route exact path="/resume5" component={Resume5} />
        <Route exact path="/resume6" component={Resume6} />
        <Route exact path="/resume7" component={Resume7} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
