import React, {Component, Fragment} from 'react';
import TodoItem from "./TodoItem";


class TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            list: []
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
                    <button onClick={this.handleBtnClick}>
                        提交
                    </button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        );
    }

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleBtnClick = () => {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue:''
        })
    }
    handleDelete = (index)=>{
        let list = [...this.state.list];
        list.splice(index,1);
        this.setState({
            list
        });
    }

    getTodoItem = ()=>{
        return this.state.list.map((value, index)=>{
            // return <li key={index} onClick={this.handleDelete}>{value}</li>
            return(
                <TodoItem content={value} index={index} deleteItem={this.handleDelete}/>
            )
        })
    }

}



export default TodoList;