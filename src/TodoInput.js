import React, { Component } from "react"

export default class TodoInput extends Component {
    constructor(props){
        super(props)
        this.state = {
            newTodo: ""
        }
        
        this.addClicked = this.addClicked.bind(this)
    }
    
    addClicked(){
        let {onAddTodo} = this.props
        onAddTodo(this.state.newTodo)
        this.setState({
            newTodo: ""
        })
    }
    
    render(){
        return(
            <div>
                <input value={this.state.newTodo} onChange={(e)=>this.setState({ newTodo: e.target.value })}/>
                <button onClick={this.addClicked}>Add</button>
            </div>
            
        )
    }
}