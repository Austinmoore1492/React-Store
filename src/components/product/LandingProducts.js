import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { withTheme } from '@material-ui/core/styles';

import AllProducts from '../ui/AllProducts';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  > a {
    text-decoration: none;
  }
  max-width: 1100px;
  margin: auto;
  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
  }
`;
const LargeIMG = styled.div`
  background-image: url(${props => props.img});
  background-color: #ddd;
  width: 100%;
  padding-bottom: 133%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  display: inline-block;
  @media (min-width: 650px) {
    transition: all 0.5s;
    &:hover {
      transform: translateY(-20px);
      box-shadow: 0px 8px 5px #969696, 0px 12px 8px #a1a1a1,
        0px 15px 10px #afafaf;
    }
  }
`;
const ImgWrapper = styled.div`
  border-bottom: 2px solid ${props => props.borderColor};
  display: flex;
`;
const Title = styled.div`
  color: black;
  text-decoration-color: #ff7400;
  margin-top: 10px;
  @media (max-width: 650px) {
    font-size: 14px;
  }
`;
const Price = styled.span`
  display: block;
  color: #888;
  font-size: 14px;
  margin-top: 5px;
`;

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.config.products
    };
  }

  componentDidMount() {
    fetch('/product-info/')
      .then(res => res.json())
      .then(skus => {
        let products = [...this.state.products];
        products.forEach(product => {
          let skuList = [...skus];
          skuList = skuList
            .filter(s => s.product === product.stripe_id)
            .map(s => s.price / 100);
          if (skuList.length === 1) {
            product['price'] = skuList[0];
          } else {
            let min = Math.min(...skuList),
              max = Math.max(...skuList);
            if (min === max) product['price'] = skuList[0];
            else product['price'] = `${min} - $${max}`;
          }
        });
        this.setState({ products });
      })
      .catch(error => console.error('Error:', error));
  }
  render() {
    const size = 3;
    const { products } = this.state;
    return (
      <Fragment>
        <Wrapper>
          {/*Only show three items on the home screen
          can change the images to show sales
          or items that are selling really Well*/
          products.slice(0, size).map((product, i) => {
            return (
              <Link key={i} to={`/product/${product.url}`}>
                <ImgWrapper
                  borderColor={this.props.theme.palette.secondary.main}
                >
                  <LargeIMG
                    img={`../photos/${product.url}/${product.photos[0]}`}
                    alt={product.name}
                  />
                </ImgWrapper>
                <Title>
                  {product.name}
                  <Price>${product.price}</Price>
                </Title>
              </Link>
            );
          })}
        </Wrapper>
        <AllProducts />
      </Fragment>
    );
  }
}
export default withTheme(ProductList);
