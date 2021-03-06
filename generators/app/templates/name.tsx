import * as React from 'react'

import * as T from './<%= name %>.types'
<% if (module) { %>import * as S from './<%= name %>.module.scss'<% } else { %>import './<%= name %>.scss'<% } %>

const <%= name %>: React.FunctionComponent<T.<%= name %>Props> = (
    props: T.<%= name %>Props
): JSX.Element => {
    return (
        <div className={(props.className ? props.className + ' ' : '') + S['<%= nameKebab %>']}><%= name %> Component</div>
    )
}

export default <%= name %>
