import React from 'react';
import styled from 'styled-components';

const Deal = ({ deal, onChange, selectedOption }) => (
  <LabelWrap>
    {deal.title}
    <CustomRadio checked={selectedOption === `${deal.title}`} />
    <InputWrap
      id={deal.id}
      type="radio"
      name="packageDeals"
      value={deal.title}
      onChange={onChange}
    />
    <PriceWrap>
      <MSRPWrap>{'$' + deal.msrp}</MSRPWrap>
      <SaleWrap>{'$' + deal.salePrice}</SaleWrap>
    </PriceWrap>
    <BoughtWrap>{deal.bought + '+ bought'}</BoughtWrap>
    <PercentWrap>{deal.salePercent + '% OFF'}</PercentWrap>
    <br />
  </LabelWrap>
);

const LabelWrap = styled.label`
  display: block;
  position: relative;
  padding-left: 0px;
  margin-bottom: 12px;
  cursor: pointer;
  font-family: Open Sans,OpenSans,system,-apple-system,BlinkMacSystemFont,Roboto,Arial,FreeSans,sans-serif;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
`;

const InputWrap = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const CustomRadio = styled.span`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 17px;
  width: 17px;
  padding-color: white;
  border: ${props => props.checked ? "2px solid #0076d6" : "2px solid gray"};
  background: white;
  border-radius: 50%;
  &::after {
    content: '';
    position: absolute;
    display: ${props => props.checked ? "block" : "none"};
    top: 3px;
    left: 3px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #0076d6;
  }
`;

const PriceWrap = styled.div`
  border: red;
  font-size: 18px;
`;

const MSRPWrap = styled.p`
  color: gray;
  text-decoration: line-through;
`;

const SaleWrap = styled.p`
  color: rgb(52, 135, 0);
`;

const BoughtWrap = styled.p`
  color: gray;

`;

const PercentWrap = styled.p`
  color: rgb(52, 135, 0);
  font-size: 13px;
  background-color: rgb(234, 252, 222);
  border-radius: 10px;
  text-align: center;
  margin: 5px, 3px;
  width: 65px;
  height: 20px;
`;


export default Deal;
