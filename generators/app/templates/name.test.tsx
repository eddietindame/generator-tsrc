import React from 'react'

import { render } from '@testing-library/react'
import <%= name %> from './<%= name %>'

describe('<%= name %>', () => {
    it('renders', () => {
        const { getByText } = render(<<%= name %> />)
        const componentText = getByText('<%= name %> Component')
        expect(componentText).toBeDefined()
    })
})
