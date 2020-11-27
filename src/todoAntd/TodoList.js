import React,{Component} from 'react'
import 'antd/dist/antd.css'
import {Input,Button,List} from 'antd'
import store from './store'
import * as actionCreators from './store/actionCreators'

class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.handleStoreChange);
    }
    


    render() {
        return(
            <div>
            <div style={{marginTop:'10px',marginLeft:'10px'}}>
                <Input  placeholder='todosomething'
                        style={{width:'300px'}}
                        value={this.state.inputValue}
                        onChange ={this.handleInputChange}
                />
                <Button type="primary" onClick={this.handleBtnClick}>提交</Button>

            </div >
                <List
                    style={{width:'500px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem = {(item,index) =>(
                        <List.Item
                            onClick={(index)=> {this.listItemDelete(index)}}
                            key={index}>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        );
    }
    componentDidMount() {
        const action =actionCreators.getTodoList();
        console.log(action);
        store.dispatch(action);
    }


    handleInputChange = (e)=>{
        const  action = actionCreators.changeInputValue(e.target.value);
        store.dispatch(action);
    }
    handleBtnClick = () => {
        const  action = actionCreators.handleBtnClick();
        store.dispatch(action);
    }

    listItemDelete = (index)=>{
        const  action = actionCreators.listItemDelete(index);
        store.dispatch(action);
    }


    handleStoreChange = ()=>{

        this.setState(store.getState())
    }




}
export default TodoList;