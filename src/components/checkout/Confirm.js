import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import PageWrapper from '../ui/PageWrapper';
import Paper from '@material-ui/core/Paper';

const Confirm = props => {
  const { updateNumber } = props;

  useEffect(() => {
    //Clear cart on confirmation and update cart total to 0
    const clearCart = () => {
      localStorage.setItem('react-stripe-store_products', JSON.stringify(""));
      updateNumber(0);
    };
    clearCart();
  }, [updateNumber]);

  return (
    <PageWrapper>
      <Paper
        style={{ padding: '40px', minHeight: '500px', textAlign: 'center' }}
      >
        <h2 style={{ marginTop: 0, fontWeight: 600 }}>
          Thank you for your purchase!
        </h2>
        <h3 style={{ marginBottom: '2rem' }}>
          <strong>Please Keep your Order ID for your records.</strong>
        </h3>
        <p style={{ marginBottom: '2rem' }}>
          A confirmation email has been sent to{' '}
          <b>{props.location.state.order.email}</b>.
        </p>
        <p>
          Order ID:{' '}
          <strong>{props.location.state.order.id.split('_')[1]}</strong>
        </p>
      </Paper>
    </PageWrapper>
  );
};
export default withRouter(Confirm);
