import React from 'react';
import Deal from './deal';

const Deals = ({ deals, onChange, selectedOption }) => (
  <form>
    {deals.map((deal, i) => {
      const key = i + 1;
      return (
        <Deal
          key={key}
          deal={deal}
          onChange={onChange}
          selectedOption={selectedOption}
        />
      );
    })}
  </form>
);

export default Deals;
