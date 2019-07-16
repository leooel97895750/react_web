import React from 'react'

const TodoInput = props =>{
    return(
        <div>
            <input
                type="text"
                placeholder={props.initText}
                onKeyPress={e => {
                    if(e.target.value && e.key === "Enter"){
                        props.onKeyPress()
                    }
                }}
                onChange={e => {
                    props.onChange(e.target.value)
                }}
                value={props.value}
            />
        </div>
    )
}

export default TodoInput