import React,{Component} from 'react'
import 'antd/dist/antd.css'
import {Input,Button,List} from 'antd'
let data = [
    '星期一','星期二','星期三','星期四','星期五','星期六','星期日'
]
class TodoList extends Component{

    render() {
        return(
            <div>
            <div style={{marginTop:'10px',marginLeft:'10px'}}>
                <Input  placeholder='todosomething' style={{width:'300px'}} value={''}/>
                <Button type="primary">提交</Button>

            </div>
                <List
                    bordered
                    dataSource={data}
                    renderItem = {item =>(
                        <List.Item>{item}</List.Item>
                    )}
                />


            </div>
        );
    }
}
export default TodoList;