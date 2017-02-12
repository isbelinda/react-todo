import React, { Component } from "react"


export default class TodoItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            done: false
        }
        this.toggle = this.toggle.bind(this)
    }

    toggle(){
        this.setState({
            done: !this.state.done
        })
    }

    render(){
        let {text} = this.props

        // if(this.state.done) return 'text-line'
        return(
            <div className={(this.state.done? 'text-line': '')}>
                <input type="checkbox"
                       value={this.state.done}
                       onClick={this.toggle}
                />
                {text}
            </div>

        )
    }
}