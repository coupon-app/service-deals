import React from 'react';
import styled from 'styled-components';

const Deal = ({ deal, onChange, selectedOption, sale, dealEnd }) => {
  const timeDate = new Date(dealEnd);
  const date = timeDate.getDate();
  const month = timeDate.getMonth();
  const msrp = '$' + Math.trunc(deal.msrp);
  const salePrice = '$' + Math.trunc(deal.salePrice);

  return deal.soldOut ? (
    <LabelWrap soldOut={deal.soldOut}>
      <TitleWrap>
        <SoldOutRadio />
        <DealTitleWrap>{deal.title}</DealTitleWrap>
        <InputWrap
          id={deal.id}
          type="radio"
          name="packageDeals"
          value={deal.title}
        />
      </TitleWrap>
      <MSRPWrap>{msrp}</MSRPWrap>
      <BottomMetaWrap buys={deal.bought} soldOut={deal.soldOut}>
        <BoughtWrap>{deal.allowed + '+ bought'}</BoughtWrap>
        <SoldOutWrap>Sold Out</SoldOutWrap>
      </BottomMetaWrap>
    </LabelWrap>
  ) : (
    <LabelWrap>
      <TitleWrap>
        <CustomRadio checked={selectedOption === `${deal.title}`} />
        <DealTitleWrap>{deal.title}</DealTitleWrap>
        <InputWrap
          id={deal.id}
          type="radio"
          name="packageDeals"
          value={deal.title}
          onChange={onChange}
        />
      </TitleWrap>
      {sale ? (
        <div>
          <PriceWrap>
            <MSRPWrap>{msrp}</MSRPWrap>
            <SaleWrap sale={sale}>{salePrice}</SaleWrap>
          </PriceWrap>
          <PriceWrap>
            <PriceDiffWrap>{'Extra $' + Math.trunc(deal.salePrice - deal.extraPrice) + ' Off Ends ' + month + '/' + date}</PriceDiffWrap>
            <ExSaleWrap>{'$' + Math.trunc(deal.extraPrice)}</ExSaleWrap>
          </PriceWrap>
        </div>
      ) : (
        <PriceWrap>
          <MSRPWrap>{msrp}</MSRPWrap>
          <SaleWrap>{salePrice}</SaleWrap>
        </PriceWrap>
      )}
      <BottomMetaWrap buys={deal.bought}>
        {deal.bought ? <BoughtWrap>{deal.bought + '+ bought'}</BoughtWrap> : null}
        <PercentWrap sale={sale}>{sale ? deal.extraPercent + '% OFF' : deal.salePercent + '% OFF'}</PercentWrap>
      </BottomMetaWrap>
    </LabelWrap>
  );
};

const LabelWrap = styled.label`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: auto;
  min-height: 85px;
  margin-bottom: 4px;
  border-bottom: 1px solid #e6e7e8;
  cursor: ${(props) => (props.soldOut ? 'default' : 'pointer')};
  font-family: Open Sans,OpenSans,system,-apple-system,BlinkMacSystemFont,Roboto,Arial,FreeSans,sans-serif;
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-top: 5px;

`;

const DealTitleWrap = styled.div`
  flex-wrap: wrap;
  font-size: 15px;
  font-weight: 430;
  letter-spacing: 0.05rem;
  margin-left: 10px;
`;


const InputWrap = styled.input`
  position: relative;
  opacity: 0;
`;

const CustomRadio = styled.span`
  width: 17px;
  height: 17px;
  position: relative;
  top: 9px;
  left: 0px;
  background: white;
  border: ${(props) => (props.checked ? '2px solid #0076d6' : '2px solid #d3d3d3')};
  border-radius: 50%;
  &::after {
    content: '';
    height: 11px;
    width: 11px;
    position: relative;
    top: 3px;
    left: 3px;
    background: #0076d6;
    border-radius: 50%;
    display: ${(props) => (props.checked ? 'block' : 'none')};
  }
`;

const SoldOutRadio = styled.span`
  width: 17px;
  height: 17px;
  position: relative;
  top: 9px;
  left: 0px;
  background: #f7f7f7;
  border: 2px solid #d3d3d3;
  border-radius: 50%;
`;

//                        Price                       //

const PriceWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 18px;
  font-weight: 430;
  letter-spacing: 0.03rem;
`;

const MSRPWrap = styled(PriceWrap)`
  color: gray;
  font-weight: 300;
  text-decoration: line-through;
`;

const SaleWrap = styled(PriceWrap)`
  font-weight: 430;
  color: rgb(52, 135, 0);
  text-decoration: ${(props) => (props.sale ? 'line-through' : 'initial')};
  margin-left: 5px;
`;

//                      Middle                         //

const PriceDiffWrap = styled.div`
  font-size: 12px;
  font-weight: 455;
  color: #F0001E;
  background-color: #FFFFFF;
`;

const ExSaleWrap = styled.div`
  color: #F0001E;
  text-decoration: ${(props) => (props.sale ? 'line-through' : 'initial')};
  margin-left: 5px;
`;

//                       Bottom                        //

const BottomMetaWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.buys ? 'space-between' : 'flex-end')};
  align-items: baseline;
  margin-top: ${(props) => (props.soldOut ? '8px' : '4px')};
  margin-bottom: 5px;
`;

const BoughtWrap = styled.div`
  font-size: 12px;
  font-weight: 300;
  color: gray;
  margin-left: 30px
`;

const PercentWrap = styled.div`
  font-size: 12px;
  font-weight: 455;
  color: ${(props) => (props.sale ? '#F0001E' : '#40A500')};
  background-color: ${(props) => (props.sale ? '#FFF5F5' : '#EAFCDE')};
  padding: 3px 10px;
  margin-bottom: 5px;
  border-radius: 5px;
`;

const SoldOutWrap = styled.div`
  color: #F0001E;
  font-weight: 470;
  font-size: 18px;
  letter-spacing: 0.05rem;
`;


export default Deal;
