import React from 'react'
import { ImageList } from '../../components/ImageList'
import { configure, shallow } from 'enzyme';
import toJSON from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('should render ImageList', () => {
    const wrapper = shallow(<ImageList images={{}} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})