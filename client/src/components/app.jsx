import React from 'react';
import $ from 'jquery';
import Deals from './deals';

class App extends React.Component {
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
        const deals = packageDeal.dealData[0];
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
        <form>
          <Deals
            onChange={this.onChange}
            selectedOption={selectedOption}
            deals={deals}
            key={Package.id}
          />
        </form>
        <button type="button">Buy</button>
        <br />
        <button type="button">Give as a Gift</button>
      </div>
    );
  }
}

export default App;
