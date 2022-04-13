import React from 'react'

export default function withHover(Component, propName = 'hovering'){
    return class WithHover extends React.Component {
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
            const props = {
                [propName] : this.state.hovering,
                ...this.props
            }

            return (
                <div onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                    <Component {...props}/>
                </div>
            )
        }
    }
}