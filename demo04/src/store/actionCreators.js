import {ADDITEMS,CHANGE_INPUT_VALUE,DELETEITEMS} from './actionTypes'

export const changeInputAction=(value)=>({
    type:CHANGE_INPUT_VALUE,
    value
})
export const addItemsAction=()=>({
    type:ADDITEMS
})
export const deleteItemsAction=(index)=>({
    type:DELETEITEMS,
    index
})