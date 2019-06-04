import * as React from "react";
import { render } from "react-dom";
import "./styles.css";
import SearchAppBar from "./Components/Layouts/AppBar";
import Footer from "./Components/Layouts/Footer";
import Panel from "./Components/Layouts/Panel";
import CssBaseline from "@material-ui/core/CssBaseline";
import { projects } from "./store";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App">
          <SearchAppBar />

          <Panel proj={projects} />

          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
