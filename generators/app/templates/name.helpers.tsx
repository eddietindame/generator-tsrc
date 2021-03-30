import * as React from 'react'

import { classList } from '@/helpers/util'
import * as T from './<%= name %>.types'
<% if (module) { %>import * as S from './<%= name %>.module.scss'<% } else { %>import './<%= name %>.scss'<% } %>

const <%= name %>: React.FunctionComponent<T.<%= name %>Props> = (
    props: T.<%= name %>Props
): JSX.Element => {
    return (
        <div className={classList([
            props.className,
            <% if (module) { %>S['<%= nameKebab %>']<% } else { %>'<%= nameKebab %>'<% } %>
        ])}><%= name %> Component</div>
    )
}

export default <%= name %>
