import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import { Header } from '../styles';

describe('Testing Landing.styles...', () => {
  configure({ adapter: new Adapter() });

  it('Header should render correctly without props', () => {
    const wrapper = shallow(<Header />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
