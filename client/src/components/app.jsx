const React = require('react');
const $ = require('jquery');
const { Deals } = require('./deals.jsx');

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
        this.setState({ Package, deals, selectedOption: deals[0].title });
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
          <input type="submit" value="Buy" />
          <br />
          <input type="submit" value="Give as a Gift" />
        </form>
      </div>
    );
  }
}

export default App;
