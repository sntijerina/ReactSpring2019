import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import WeatherCard from './WeatherCard';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe('Weather Card', () => {

    it('Weather Card renders', () => {
        const component = shallow(<WeatherCard />);
    
        expect(component).toMatchSnapshot();
    });
});