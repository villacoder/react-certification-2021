import {shallow} from 'enzyme'
import React from 'react'
import Home from '../../../pages/Home/Home.page';

describe('Tests of the < HomePage/> component', () => {
    

    test('should show the < HomePage/> component correctly', () => {
        
        const wrapper = shallow(< Home/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
