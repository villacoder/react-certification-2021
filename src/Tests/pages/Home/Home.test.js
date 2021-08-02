import {shallow} from 'enzyme'
import React from 'react'
import Home from '../../../pages/Home/Home.page';

describe('Tests of the < HomePage/> component', () => {
    
    const wrapper = shallow(< Home/>)

    test('should show the < HomePage/> component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    
})
