import React from 'react'

export default class Hover extends React.Component {
    constructor(props){
    super(props)

    this.state = {
        hovering: false,
    }

        this.handleMouseOver = this.handleMouseOver.bind(this)
        this.handleMouseOut = this.handleMouseOut.bind(this)
    }

    handleMouseOver(){
        this.setState({
            hovering: true
        })
    }

    handleMouseOut(){
        this.setState({
            hovering: false
        })
    }

    render(){
        return (
            <div onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                {this.props.render(this.state.hovering)}
            </div>
        )
    }
}
