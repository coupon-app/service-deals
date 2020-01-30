import React from 'react';
import { shallow } from 'enzyme';

import Deal from '../../client/src/components/deal';

describe('Deals Component', () => {
  const data = {
    id: 7,
    title: 'quas nemo et',
    msrp: '658.99',
    salePrice: '619.46',
    extraPrice: '576.10',
    bought: 140,
    allowed: 340,
    soldOut: true,
    salePercent: 6,
    extraPercent: 6,
    packageId: 4,
    createdAt: '2020-01-28T22:22:24.000Z',
    updatedAt: '2020-01-28T22:22:24.000Z',
  };

  it('renders a label', () => {
    const wrapper = shallow(<Deal deal={data} />);
    expect(wrapper.find('label')).toExist();
  });
});
