import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import PageWrapper from "../ui/PageWrapper";
import CartTable from "./CartTable";
import BackWrapper from "../ui/BackWrapper";

const Wrapper = styled.div`
  padding: 40px;
  min-height: 500px;
  @media (max-width: 850px) {
    padding: 20px;
    min-height: 70vh;
  }
`;
const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 40px;
`;
const Subtotal = styled.div`
  margin-bottom: 20px;
  > span {
    font-size: 14px;
    color: #888;
    margin-right: 15px;
  }
`;

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      total: 0
    };
  }
  componentDidMount() {
    const slug = `${this.props.config.store_slug}_products`;
    let items = JSON.parse(localStorage.getItem(slug));
    this.setState({
      items: items ? items : []
    });
  }
  updateItems = items => {
    this.setState({ items });
    const slug = `${this.props.config.store_slug}_products`;
    localStorage.setItem(slug, JSON.stringify(items));
  };
  removeItem = index => {
    let items = [...this.state.items];
    items.splice(index, 1);
    this.props.updateNumber(items.length);
    this.updateItems(items);
  };
  updateCount = (index, value) => {
    let items = [...this.state.items];
    items[index].quantity = value;
    this.updateItems(items);
  };
  render() {
    let totalPrice;
    if (this.state.items.length) {
      totalPrice = this.state.items
        .map(i => i.quantity * i.price)
        .reduce((a, b) => a + Number(b))
        .toLocaleString("en-US", { style: "currency", currency: "USD" });
    }
    return (
      <PageWrapper>
        <Paper>
          <Wrapper>
            <h2 style={{ marginTop: 0, fontWeight: 600 }}>Cart</h2>
            {//Conditionally Render if user has something in the cart
            this.state.items.length > 0 && (
              <div>
                <CartTable
                  items={this.state.items}
                  updateCount={this.updateCount}
                  removeItem={this.removeItem}
                  config={this.props.config}
                />
                <RightSide>
                  <Subtotal>
                    <span>Subtotal</span>
                    {totalPrice}
                  </Subtotal>
                  <Link to={`/checkout`} style={{ textDecoration: "none" }}>
                    <Button variant="contained" color="primary">
                      Check Out
                    </Button>
                  </Link>
                </RightSide>
              </div>
            )}
            {//Suggest a product if nothing is in the cart
            this.state.items.length === 0 && (
              <p>
                Hmmmmm, there's nothing in your cart yet. May I suggest the{" "}
                <Link to={"/product/vr"} className="vrLink">
                  {" "}
                  VR Headset{" "}
                </Link>
              </p>
            )}
          </Wrapper>
          <BackWrapper />
        </Paper>
      </PageWrapper>
    );
  }
}
export default Cart;
