import React from 'react';
import { shallow } from 'enzyme';

import Deals from '../../client/src/components/deals';

describe('Deals Component', () => {
  it('renders a form', () => {
    const wrapper = shallow(<Deals deals={[1, 2, 3]} />);
    expect(wrapper.find('div')).toExist();
  });
});
