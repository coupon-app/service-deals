import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import Deals from './deals';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Package: [],
      deals: [],
      selectedOption: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/api/checkout/9',
      success: (packageDeal) => {
        const Package = packageDeal.packageData[0];
        console.log(Package);
        const deals = packageDeal.dealData[0];
        console.log(deals);
        let selectedOption;
        for (let i = 0; i < deals.length; i += 1) {
          if (!deals[i].soldOut) {
            selectedOption = deals[i].title;
            break;
          }
        }
        this.setState({ Package, deals, selectedOption });
      },
    });
  }

  onChange(e) {
    this.setState({
      selectedOption: `${e.target.value}`,
    });
  }

  render() {
    const { Package, deals, selectedOption } = this.state;
    return (
      <div>
        <Deals
          onChange={this.onChange}
          onSale={Package.onSale}
          selectedOption={selectedOption}
          deals={deals}
          dealEnd={Package.endDate}
          key={Package.id}
        />
        <BuyWrap type="button">Buy</BuyWrap>
      </div>
    );
  }
}

const BuyWrap = styled.button`
  width: 350px;
  height: 40px;
  font-size: 17px;
  color: white;
  text-align: center;
  background-color: rgb(78, 163, 0);
  border-radius: 4px;
  border: 1px solid rgb(53, 163, 0);
  margin-top: 4px;
  letter-spacing: 0.05rem;
  &:hover {
    background-color: rgb(53, 133, 0);
  }
`;

export default Checkout;
