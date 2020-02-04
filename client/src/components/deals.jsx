import React from 'react';
import Deal from './deal';

const Deals = ({ deals, onChange, selectedOption, onSale, dealEnd }) => {
  return (
  <form>
    {deals.map((deal) => (
      <Deal
        key={deal.id}
        deal={deal}
        onChange={onChange}
        onSale={onSale}
        dealEnd={dealEnd}
        selectedOption={selectedOption}
      />
    ))}
  </form>
);
};

export default Deals;
