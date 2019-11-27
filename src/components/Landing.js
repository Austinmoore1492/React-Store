import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

import LandingProducts from "./product/LandingProducts";

const Hero = styled.div`
  height: 400px;
  max-width: 2000px;
  margin: auto;
  background-image: url("https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
  background-position: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  @media (max-width: 700px) {
    font-size: 2rem;
    height: 150px;
  }
  @media (min-width: 2000px) {
    height: 600px;
  }
`;

class Landing extends Component {
  render() {
    const { config } = this.props;
    return (
      <Fragment>
        <Hero>
          <div className="heroDiv">
            <p className="heroPara">Welcome Weary Traveler</p>
          </div>
        </Hero>
        <Paper
          style={{
            padding: "40px",
            maxWidth: 1100,
            margin: "20px auto",
            backgroundColor: "#fff"
          }}
        >
          <LandingProducts config={config} />
        </Paper>
      </Fragment>
    );
  }
}
export default Landing;
