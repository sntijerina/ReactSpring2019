import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Weather from './Weather';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe('Weather', () => {
  it('renders', () => {
    const component = shallow(<Weather />);
  
    expect(component).toMatchSnapshot();
  });
});