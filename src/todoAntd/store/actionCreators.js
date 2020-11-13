import * as actionTypes from './actionTypes'
import axios from 'axios'

export const changeInputValue = (value)=>{
    return {
        type:actionTypes.CHANGE_INPUT_VALUE,
        value
    }
}

export const handleBtnClick = ()=>{
    return {type:actionTypes.HANDLE_BTN_CLICK}
}

export const listItemDelete = (index)=>{
    return {type:actionTypes.LIST_ITEM_DELETE,index}
}


export const initListAction = (value)=>{
    return {
        type:actionTypes.INIT_LIST_DATA,
        value
    }
}

export const getTodoList = ()=>{
    return (dispatch)=>{
        axios.get('/api/list.json').then((res)=>{
            const data = res.data.list;
            const action =initListAction(data);
            dispatch (action);
        })
    }

}