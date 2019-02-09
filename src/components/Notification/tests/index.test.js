import React from 'react';
import { shallow } from 'enzyme';

import Notification from '../index';

describe('<Notification />', () => {
  it('should render an <Notification> tag', () => {
    const wrapper = shallow(<Notification />);

    expect(wrapper.exists()).toBe(true);
  });
});
