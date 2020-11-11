const defaultState = {
    inputValue:'你好',
    list:['星期一','星期二','星期三','星期四','星期五','星期六','星期日']
};
//reducer 可以接受state,但不能修改state
export default (state = defaultState,action )=>{
    if(action.type === 'change_input_value'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === 'handle_btn_click'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list=[...newState.list, newState.inputValue];
        return newState;
    }




    return state;
}