import React from 'react'
import { SearchForm } from '../../components/SearchForm'
import { configure, shallow } from 'enzyme';
import toJSON from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16';
import { saveQuery, getImages } from '../../actions/imageActions'

configure({ adapter: new Adapter() });

test('should render error for empty submit', () => {
    const wrapper = shallow(<SearchForm saveQuery={saveQuery} getImages={getImages} />)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})