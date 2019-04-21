import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import WeatherForm from './WeatherForm';
import Adapter from "enzyme-adapter-react-16";
import { TextField, Button } from '@material-ui/core';

Enzyme.configure({ adapter: new Adapter() });

describe('Weather Form', () => {

    it('Weather Form renders', () => {
        const component = shallow(<WeatherForm />);
    
        expect(component).toMatchSnapshot();
    });

    it('City renders', () => {
        const component = shallow(<WeatherForm />);

        expect(component.find(TextField).length).toEqual(1);
    });

    it('Button renders', () => {
        const component = shallow(<WeatherForm />);
        
        expect(component.find(Button).length).toEqual(1);
    });
});