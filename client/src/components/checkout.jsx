import React from 'react';
import $ from 'jquery';
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
      url: 'http://localhost:3000/api/checkout/4',
      success: (packageDeal) => {
        const Package = packageDeal.packageData[0];
        console.log(Package);
        const deals = packageDeal.dealData[0];
        console.log(deals);
        const selectedOption = deals[0].title;
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
          key={Package.id}
        />
        <button type="button">Buy</button>
        <br />
        <button type="button">Give as a Gift</button>
      </div>
    );
  }
}

export default Checkout;
