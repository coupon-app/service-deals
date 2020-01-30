import React from 'react';
import { shallow } from 'enzyme';

import App from '../../client/src/components/app';

describe('App Component', () => {
  it('renders a form', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('form')).toExist();
  });
});
