import React,{Component} from 'react'
import 'antd/dist/antd.css'
import {Input,Button,List} from 'antd'
import store from './store'


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
                    renderItem = {item =>(
                        <List.Item>{item}</List.Item>
                    )}
                />


            </div>
        );
    }
    handleInputChange = (e)=>{
        const  action = {
            type:'change_input_value',
            value:e.target.value
        }
        store.dispatch(action);
    }
    handleBtnClick = () => {
        const  action = {
            type:'handle_btn_click'

        }
        store.dispatch(action);
    }


    handleStoreChange = ()=>{

        this.setState(store.getState())
    }




}
export default TodoList;