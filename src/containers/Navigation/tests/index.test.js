import React from 'react';
import { shallow } from 'enzyme';

import Navigation from '../index';

describe('<Navigation />', () => {
  test('should render an <Navigation> tag', () => {
    const wrapper = shallow(<Navigation />);

    expect(wrapper.exists()).toBe(true);
  });
});
