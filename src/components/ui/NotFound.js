import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';

import PageWrapper from './PageWrapper';

const Wrapper = styled.div`
  padding: 40px;
  min-height: 500px;
  text-align: center;
  @media (max-width: 850px) {
    padding: 20px;
    min-height: 70vh;
  }
`;
class NotFound extends Component {
  render() {
    return (
      <PageWrapper>
        <Paper>
          <Wrapper>
            <Fragment>
              <h1>Page Not Found</h1>
              <p>Sorry, this page does not exist!</p>
              <p>
                Maybe You Were Looking For Our{' '}
                <Link to="/product" className="vrLink">
                  Shop
                </Link>
              </p>
            </Fragment>
          </Wrapper>
        </Paper>
      </PageWrapper>
    );
  }
}
export default NotFound;
