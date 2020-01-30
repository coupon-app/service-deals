const React = require('react');
// const styled = require('styled-components');
// const Deal = require('./deal.jsx');

const Deals = (props) => (
  // const labelWrapper =styled.label `
  //   border
  // `;
  props.deals.map((deal) => (
    <div key={deal.id}>
      <label>
        <input
          id={deal.id}
          type="radio"
          name="packageDeals"
          value={deal.title}
          onChange={props.onChange}
          checked={props.selectedOption === `${deal.title}`}
        />
        {deal.title}
        <p>
          <span>
            {'$' + deal.msrp}
          </span>
          <span>
            {' $' + deal.salePrice}
          </span>
        </p>
        <p>
          <span>{deal.bought + '+ bought '}</span>
          <span>{deal.salePercent + '% OFF'}</span>
        </p>
      </label>
    </div>
  ))
);

module.exports = { Deals };
