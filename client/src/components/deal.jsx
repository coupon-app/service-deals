import React from 'react';

const Deal = ({ deal, onChange, selectedOption }) => (
  <label>
    <input
      id={deal.id}
      type="radio"
      name="packageDeals"
      value={deal.title}
      onChange={onChange}
      checked={selectedOption === `${deal.title}`}
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
);

export default Deal;
