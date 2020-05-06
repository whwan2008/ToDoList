import {ADDITEMS,CHANGE_INPUT_VALUE,DELETEITEMS} from './actionTypes'

const defaultState={
    inputValue:'Write Something',
    List:['投简历','拿offer','走上人生巅峰']
}
export default (state=defaultState,action)=>{
    if(action.type===CHANGE_INPUT_VALUE){
        let newState=JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value
        return newState
    }
    if(action.type===ADDITEMS){
        let newState=JSON.parse(JSON.stringify(state))
        newState.List.push(newState.inputValue)
        newState.inputValue=''
        return newState
    }
    if(action.type===DELETEITEMS){
        let newState=JSON.parse(JSON.stringify(state))
        console.log(action.index)
        newState.List.splice(action.index,1)
        return newState
    }
    return state;
}