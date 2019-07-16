import React from 'react'

const TodoItem = props =>(
    <li>
        {props.text}
        <button onClick={props.deleteMethod}>刪除</button>
    </li>
)

export default TodoItem