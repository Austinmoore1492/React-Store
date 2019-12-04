import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

import PageWrapper from "../ui/PageWrapper";

class Login extends Component {
  state = {
    password: ""
  };

  updatePassword = e => {
    this.setState({ password: e.target.value });
  };
  logUserIn = () => {
    this.setState({ error: null });
    fetch("/api/login", {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      credentials: "same-origin",
      body: JSON.stringify({ password: this.state.password })
    })
      .then(res => {
        if (res.redirected) this.props.history.push("/admin");
        else return res.json();
      })
      .then(json => {
        if (!json) return;
        else if (json.error)
          this.setState({
            password: "",
            error: json.error.message
          });
      });
  };

  render() {
    return (
      <PageWrapper>
        <Paper>
          <div style={{ padding: "20px" }}>
            <div style={{ marginBottom: "20px" }}>
              <span style={{ marginRight: "10px" }}>password:</span>
              <Input
                value={this.state.password}
                onChange={this.updatePassword}
                style={{ color: "rgba(0,0,0,0.2)" }}
              />
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={this.logUserIn}
            >
              log in
            </Button>
            <div style={{ marginTop: "20px" }}>{this.state.error}</div>
          </div>
        </Paper>
      </PageWrapper>
    );
  }
}
export default withRouter(Login);
