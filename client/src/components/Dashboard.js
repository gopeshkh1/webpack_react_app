import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import axios from "axios";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  onClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onTest = () => {
    axios.get("/api/user").then(res => {
      console.log(res.data);
    });
  };
  render() {
    return (
      <div>
        <Button onClick={this.onClick} color="primary">
          <Add />
        </Button>
        <button onClick={this.onTest}>Hello from backend</button>
        {this.state.counter}
      </div>
    );
  }
}
