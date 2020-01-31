import React from 'react';
import Deal from './deal';

const Deals = ({ deals, onChange, selectedOption, onSale }) => (
  <form>
    {deals.map((deal, i) => {
      return (
        <Deal
          key={deal.id}
          deal={deal}
          onChange={onChange}
          onSale={onSale}
          selectedOption={selectedOption}
        />
      );
    })}
  </form>
);

export default Deals;
