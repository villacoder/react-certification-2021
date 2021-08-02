import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../../components/Layout/Layout.component';

describe('Test of the Layout component', () => {
    
    let wrapper = shallow( < Layout />)
    
    test('main container should be rendered correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('main tag should contain the container className', () => {
        const mainContainer = wrapper.find('main')
        expect(mainContainer.hasClass('container')).toBe(true)
    })
    
    
})
