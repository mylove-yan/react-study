import React, {Component, Fragment} from 'react'

export default class TodoItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li onClick={this.handleClick}> {this.props.content}</li>
        )
    }

    handleClick = () => {
        this.props.deleteItem(this.props.index);
    }


}