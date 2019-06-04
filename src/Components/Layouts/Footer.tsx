import * as React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    flexGrow: 1
  }
};

class Footer extends React.Component {
  state = {
    value: "todo"
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <Paper>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Todo" value="todo" />
          <Tab label="Coming Up" value="coming-up" />
          <Tab label="All" value="all" />
        </Tabs>
      </Paper>
    );
  }
}

export default withStyles(styles)(Footer);
