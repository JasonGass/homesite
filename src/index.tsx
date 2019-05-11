import * as React from "react";
import { render } from "react-dom";
import "./styles.css";
import Button from "@material-ui/core/Button";
import Header from "./Components/Layouts/Header";
import SearchAppBar from "./Components/Layouts/AppBar";
import Footer from "./Components/Layouts/Footer";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="App">
        <SearchAppBar />
        <Header name="JASON" />
        <h2>Start editing to see some magic happen!</h2>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <Footer />
      </div>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
