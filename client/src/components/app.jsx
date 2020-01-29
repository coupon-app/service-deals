const React = require('react');
const $ = require('jquery');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Package: [],
      deals: [],
    };
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/api/checkout/1',
      success: (packageDeal) => {
        const Package = packageDeal.packageData;
        const deals = packageDeal.dealData.flat(1);
        this.setState({ Package, deals });
      },
    });
  }

  render() {
    return (
      <div>
        <h1>Deals/Checkout</h1>
        <p>{ JSON.stringify(this.state.Package) }</p>
        <p>{ JSON.stringify(this.state.deals) }</p>
      </div>
    );
  }
}

export default App;
