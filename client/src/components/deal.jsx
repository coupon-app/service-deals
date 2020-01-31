import React from 'react';
import styled from 'styled-components';
import Price from './price';

const Deal = ({ deal, onChange, selectedOption, onSale }) => (
  <LabelWrap>
    <DealTitleWrap>{deal.title}</DealTitleWrap>
    <CustomRadio checked={selectedOption === `${deal.title}`} />
    <InputWrap
      id={deal.id}
      type="radio"
      name="packageDeals"
      value={deal.title}
      onChange={onChange}
    />
    {onSale ? (
      <PriceWrap>
        <MSRPWrap>
          <Price value={deal.msrp} />
        </MSRPWrap>
        <SaleWrap onSale={onSale}>
          <Price value={deal.salePrice} />
        </SaleWrap>
        <br />
        <EPWrap>
          <Price value={deal.extraPrice} />
        </EPWrap>
      </PriceWrap>

    ) : (
      <PriceWrap>
        <MSRPWrap>
          <Price value={deal.msrp} />
        </MSRPWrap>
        <SaleWrap>
          <Price value={deal.salePrice} />
        </SaleWrap>
      </PriceWrap>
    )}
    <BottomMetaWrap>
      <BoughtWrap>{deal.bought + '+ bought'}</BoughtWrap>
      <PercentWrap onSale={onSale}>{onSale ? deal.extraPercent + '% OFF' : deal.salePercent + '% OFF'}</PercentWrap>
    </BottomMetaWrap>
    <br />
  </LabelWrap>
);

const LabelWrap = styled.label`
  width: 310px;
  height: 100px;
  position: relative;
  display: block;
  padding-left: 30px;
  margin-bottom: 10px;
  border-bottom: 1px solid #e6e7e8;
  cursor: pointer;
`;

const DealWrap = styled.div`
  font-family: Open Sans,OpenSans,system,-apple-system,BlinkMacSystemFont,Roboto,Arial,FreeSans,sans-serif;
  position: relative;
  top: 5px;
  left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: stretch;
  color: black;
  font-size: 15px;
  font-weight: 430;
  letter-spacing: 0.05rem;
  padding: 2px;
`;

const DealTitleWrap = styled(DealWrap)`
  top: 0px;
  left: 2px;
`;

const InputWrap = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  position: relative;
  cursor: pointer;
`;

const CustomRadio = styled.span`
  width: 17px;
  height: 17px;
  position: absolute;
  top: 10px;
  left: 0px;
  background: white;
  border: ${props => props.checked ? "2px solid #0076d6" : "2px solid #AAA"};
  border-radius: 50%;
  &::after {
    content: '';
    height: 11px;
    width: 11px;
    position: absolute;
    top: 3px;
    left: 3px;
    background: #0076d6;
    border-radius: 50%;
    display: ${props => props.checked ? "block" : "none"};
  }
`;

const PriceWrap = styled(DealWrap)`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: baseline;
  font-size: 17px;
  font-weight: 400;
  text-align: center;
  letter-spacing: 0;
  padding: 0px;
  padding-top: 3px;
  margin-bottom: 1px;
`;

const MSRPWrap = styled(PriceWrap)`
  width: 22%;
  font-size: 15px;
  font-weight: 300;
  color: gray;
  text-decoration: line-through;
  letter-spacing: 0.03rem;
  padding: 0px;
`;

const SaleWrap = styled(PriceWrap)`
  width: auto;
  font-weight: 430;
  color: rgb(52, 135, 0);
  text-decoration: ${props => props.onSale ? "line-through" : "initial"};
  letter-spacing: 0;
  padding: 0px;
  padding-left: 4px;
`;


const EPWrap = styled(PriceWrap)`
  width: 22%;
  color: rgb(255, 0, 0);
  letter-spacing: 0;
  padding: 0px;
`;

const BottomMetaWrap = styled(DealWrap)`
  justify-content: space-between;
  letter-spacing: 0;
  padding: 0px;
`;

const BoughtWrap = styled(DealWrap)`
  top: 14px;
  left: 2px;
  font-size: 12px;
  font-weight: 300;
  color: gray;
  letter-spacing: 0px;
  padding: 0px;
  margin: 0px;
`;

const PercentWrap = styled(DealWrap)`
  width: 50px;
  height: 12px;
  display: inline-block;
  font-size: 12px;
  font-weight: 440;
  text-align: center;
  letter-spacing: 0;
  color: ${props => props.onSale ? "rgb(255, 0, 0)" : "rgb(52, 135, 0)"};
  background-color: ${props => props.onSale ? "rgb(255, 210, 210)" : "rgb(234, 252, 222)"};
  padding: 4px 8px 8px 8px;
  margin-top: 2px;
  border-radius: 5px;
`;


export default Deal;
