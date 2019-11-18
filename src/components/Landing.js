import React, { Component, Fragment } from "react";
import styled from "styled-components";

import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

import ProductList from "./product/ProductList";

const Hero = styled.div`
  height: 400px;
  background-image: url("https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
  background-position: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -40px -40px 60px;
  @media (max-width: 700px) {
    font-size: 2rem;
    height: 150px;
  }
`;

class Landing extends Component {
  render() {
    const { config } = this.props;
    return (
      <Fragment>
        <Paper style={{ padding: "40px", backgroundColor: "#eee" }}>
          <Hero>
            <div className="heroDiv">
              <p className="heroPara">Welcome Weary Traveler</p>
            </div>
          </Hero>

          <Divider style={{ margin: "40px 0", backgroundColor: "#003b6f" }} />
          <ProductList config={config} />
        </Paper>
      </Fragment>
    );
  }
}
export default Landing;
