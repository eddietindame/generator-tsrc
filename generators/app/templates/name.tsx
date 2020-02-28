import * as React from 'react'

import * as T from './<%= name %>.types'
import './<%= name %>.scss'

const <%= name %>: React.FunctionComponent<T.<%= name %>Props> = (
    props: T.<%= name %>Props
): JSX.Element => {
    return (
        <div className={(props.className ? props.className + ' ' : '') + '<%= nameKebab %>'}><%= name %> Component</div>
    )
}

export default <%= name %>
