import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { withTheme } from "@material-ui/core/styles";

const Wrapper = styled.div`
  padding: 10px;
  > a {
    color: #003b6f;
    text-decoration: none;
  }
  @media (min-width: 651px) {
    > a {
      transition: all 0.3s;
      border-bottom: 2px solid #fff;
      &:hover {
        border-color: #ff5100;
      }
    }
  }
  @media (max-width: 650px) {
    text-align: center;
  }
`;

const Spacer = styled.span`
  margin: 0 2px;
  color: #ff5100;
  font-size: 1.4rem;
`;

const BackWrapper = () => {
  return (
    <Wrapper>
      <Spacer>&laquo;</Spacer>
      <Link to={"/product"}>{"All Products"}</Link>
    </Wrapper>
  );
};
export default withTheme(BackWrapper);
