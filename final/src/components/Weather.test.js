import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Weather from "./Weather";
import WeatherForm from "./WeatherForm";
import WeatherCard from "./WeatherCard";
import Adapter from "enzyme-adapter-react-16";
import { createShallow } from '@material-ui/test-utils';


Enzyme.configure({ adapter: new Adapter() });

jest.mock("../api/GetWeatherApi");

describe("Weather component", () => {
    let shallow;
    beforeAll(() => {
        shallow = createShallow({ dive: true });
    });

    it("renders", () => {
        const wrapper = shallow(<Weather />);

        expect(wrapper.exists()).toBe(true);
    });

});
