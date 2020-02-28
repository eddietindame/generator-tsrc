import React from 'react'
import { shallow } from 'enzyme'

import <%= name %> from './<%= name %>'

describe('<%= name %>', () => {
    it('renders', () => {
        const wrapper = shallow(<<%= name %> className="test" />)
        expect(wrapper.find('.test')).toHaveLength(1)
    })
})
