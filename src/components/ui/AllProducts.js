import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { withTheme } from "@material-ui/core/styles";

const Wrapper = styled.div`
  margin: 2rem 0;
  text-align: center;
  > a {
    color: #003b6f;
    text-decoration: none;
    padding: 5px;
  }
  @media (min-width: 651px) {
    font-size: 2rem;
    > a {
      transition: all 0.3s;
      border-bottom: 2px solid #fff;
      &:hover {
        border-color: #ff5100;
      }
    }
  }
  @media (max-width: 650px) {
    font-size: 1.5rem;
    margin: 20px 0;
  }
`;
const Spacer = styled.span`
  color: ${props => props.color};
  margin: 0 10px;
`;

const AllProducts = ({ theme }) => {
  return (
    <Wrapper>
      <Link to={"/product"}>{"Let's Go Shopping"}</Link>
      <Spacer color={theme.palette.secondary.main}>&raquo;</Spacer>
    </Wrapper>
  );
};
export default withTheme(AllProducts);
