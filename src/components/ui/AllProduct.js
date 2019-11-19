import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { withTheme } from "@material-ui/core/styles";

const Wrapper = styled.div`
  margin: 2rem 0;
  text-align: center;
  font-size: 2rem;
  > a {
    color: #003b6f;
    text-decoration: none;
    transition: all 0.3s;
    border-bottom: 2px solid #eee;
    &:hover {
      border-color: #ff5100;
    }
  }
  @media (max-width: 650px) {
    font-size: 1rem;
    margin: 20px 0;
  }
`;
const Spacer = styled.span`
  color: ${props => props.color};
  margin: 0 10px;
`;

const AllProduct = ({ theme }) => {
  return (
    <Wrapper>
      <Link to={"/product"}>{"All Products"}</Link>
      <Spacer color={theme.palette.secondary.main}>&raquo;</Spacer>
    </Wrapper>
  );
};
export default withTheme()(AllProduct);
