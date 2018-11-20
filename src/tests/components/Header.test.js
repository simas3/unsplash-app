import React from 'react'
import Header from '../../components/Header'
import { configure, shallow } from 'enzyme';
import toJSON from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('should render Header', () => {
    const wrapper = shallow(<Header />)
    expect(toJSON(wrapper)).toMatchSnapshot()
    expect(wrapper.find('h1').length).toBe(1)
    expect(wrapper.find('h1').text()).toEqual('Unsplash App')
})