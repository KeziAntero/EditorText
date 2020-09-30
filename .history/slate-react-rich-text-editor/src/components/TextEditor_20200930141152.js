import React, { Component, component } from 'react'  
import { Editor } from 'slate-react' 
import { Value } from 'slate' 

const initialValue = Value.fromJSON({
    document: {
        nodes: [
            {
                object:'block',
                type:'paragraph',
                nodes: [
                    {
                    object:'text', 
                    leaves: [{
                        text: 'My fist paragraph',
                    },
                ],
                },

                ],
            },
        ],
    },
})

export default class TextEditor extends Component {
    
    state ={
        value: initialValue,
    }
    onChange = ({ value }) => {
        this.setState({ value })
    }

    render(){
        return (
            <Editor 
            Value={this.state.value} 
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
            />
        )
    }
}
