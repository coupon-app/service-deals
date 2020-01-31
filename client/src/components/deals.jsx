import React from 'react';
import Deal from './deal';

const Deals = ({ deals, onChange, selectedOption, onSale }) => (
  <form>
    {deals.map((deal, i) => {
      const key = i + 1;
      return (
        <Deal
          key={key}
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
