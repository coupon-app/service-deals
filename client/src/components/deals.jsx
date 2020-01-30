import React from 'react';
import Deal from './deal';

const Deals = (props) => (
  props.deals.map((deal, i) => {
    const key = i + 1;
    return (
      <div key={key}>
        <Deal
          deal={deal}
          onChange={props.onChange}
          selectedOption={props.selectedOption}
        />
      </div>
    );
  })
);

export default Deals;
