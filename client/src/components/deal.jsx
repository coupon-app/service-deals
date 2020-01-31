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
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 10px;
  cursor: pointer;
  width: 310px;
  height: 100px;
  border-bottom: 1px solid #e6e7e8;
`;

const DealTitleWrap = styled.div`
  font-family: Open Sans,OpenSans,system,-apple-system,BlinkMacSystemFont,Roboto,Arial,FreeSans,sans-serif;
  color: black;
  font-size: 15px;
  font-weight: 430;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: stretch;
  top: 0px;
  left: 2px;
  padding: 2px;
  letter-spacing: 0.05rem;
`;

const DealWrap = styled.div`
  font-family: Open Sans,OpenSans,system,-apple-system,BlinkMacSystemFont,Roboto,Arial,FreeSans,sans-serif;
  color: black;
  font-size: 15px;
  font-weight: 430;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: stretch;
  top: 5px;
  left: 0px;
  padding: 2px;
  letter-spacing: 0.05rem;
`;

const InputWrap = styled.input`
  position: relative;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const CustomRadio = styled.span`
  position: absolute;
  top: 10px;
  left: 0px;
  height: 17px;
  width: 17px;
  border: ${props => props.checked ? "2px solid #0076d6" : "2px solid #AAA"};
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

const PriceWrap = styled(DealWrap)`
  height: auto;
  width: auto;
  font-size: 17px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: baseline;
  font-weight: 400;
  text-align: center;
  padding: 0px;
  padding-top: 3px;
  margin-bottom: 1px;
  letter-spacing: 0;
`;

const MSRPWrap = styled(PriceWrap)`
  width: 22%;
  color: gray;
  font-weight: 300;
  font-size: 15px;
  text-decoration: line-through;
  padding: 0px;
  letter-spacing: 0.03rem;
`;

const SaleWrap = styled(PriceWrap)`
  width: auto;
  font-weight: 430;
  color: rgb(52, 135, 0);
  text-decoration: ${props => props.onSale ? "line-through" : "initial"};
  padding: 0px;
  padding-left: 4px;
  letter-spacing: 0;
`;


const EPWrap = styled(PriceWrap)`
  width: 22%;
  color: rgb(255, 0, 0);
  padding: 0px;
  letter-spacing: 0;
`;

const BottomMetaWrap = styled(DealWrap)`
  justify-content: space-between;
  padding: 0px;
  letter-spacing: 0;
`;

const BoughtWrap = styled(DealWrap)`
  color: gray;
  font-weight: 300;
  font-size: 12px;
  letter-spacing: 0px;
  padding: 0px;
  margin: 0px;
  top: 14px;
  left: 2px;
`;

const PercentWrap = styled(DealWrap)`
  color: ${props => props.onSale ? "rgb(255, 0, 0)" : "rgb(52, 135, 0)"};
  background-color: ${props => props.onSale ? "rgb(255, 210, 210)" : "rgb(234, 252, 222)"};
  border-radius: 5px;
  text-align: center;
  display: inline-block;
  font-size: 12px;
  font-weight: 440;
  width: 50px;
  height: 12px;
  padding: 4px 8px 8px 8px;
  letter-spacing: 0;
  margin-top: 2px;
`;


export default Deal;
