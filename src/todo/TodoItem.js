import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types';

export default class TodoItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {content} = this.props;
        return (

            <li onClick={this.handleClick}> {content}</li>
        )
    }

    handleClick = () => {
        const {deleteItem,index} = this.props;
        deleteItem(index);
    }
}
TodoItem.propTypes = {
    content:PropTypes.string
}