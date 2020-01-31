import React from 'react';
import styled from 'styled-components';

const Price = ({ value }) => (
  <PriceWrap>
    {"$" + Math.trunc(value)}
  </PriceWrap>
);

const PriceWrap = styled.div`
  font-size: 18px;
`;

export default Price;
