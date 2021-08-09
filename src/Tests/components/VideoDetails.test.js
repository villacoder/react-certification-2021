import React from 'react';
import { mount } from 'enzyme/build';
import VideoDetails from '../../components/VideoDetails/VideoDetails.component';
import { MemoryRouter, Route } from 'react-router';

describe('Tests of the VideoDetials component', () => {
    test('Should render the VideoDetails component correctly', () => {
    const wrapper = mount( 
        <MemoryRouter
            initialEntries={['/video/Po3VwR_NNGk']}
        >
            <Route path="/video/:id" component={VideoDetails} /> 
        </MemoryRouter>)

    expect(wrapper).toMatchSnapshot()
})
    
})
