import * as actionTypes from './actionTypes'

const defaultState = {
    inputValue:'你好',
    list:[]
};
//reducer 可以接受state,但不能修改state
export default (state = defaultState,action )=>{
    if(action.type === actionTypes.CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === actionTypes.HANDLE_BTN_CLICK){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list=[...newState.list, newState.inputValue];
        return newState;
    }

    if(action.type === actionTypes.INIT_LIST_DATA){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.value;
        return newState;
    }
    return state;
}