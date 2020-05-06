import React, { Component } from 'react';
import {addItemsAction,deleteItemsAction, changeInputAction} from './store/actionCreators'
import {connect} from 'react-redux'


class ToDoList extends Component {
    
    render() { 
        return ( 
            <div style={{margin:'20px'}}>
                <div style={{marginLeft:'10px'}}>
                    <input 
                    placeholder={this.props.inputValue}
                    onChange={this.props.inputValueChange}
                    value={this.props.inputValue}></input>
                    <button 
                    style={{backgroundColor:'blue'}}
                    onClick={this.props.addItems}
                    >增加</button>
                </div>
                <div>
                    <ul>
                        {
                            this.props.List.map((item,index)=>{
                                return(
                                <li 
                                key={item+index}
                                onClick={this.props.deleteItems.bind(this,index)}
                                >
                                    {item}
                                </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
    // addItems(){
    //     const action=addItemsAction()
    //     store.dispatch(action)
    // }
    // inputValueChange(e){
    //     const action=changeInputAction(e.target.value)
    //     store.dispatch(action)
    // }
    // deleteItems(index){
    //     const action=deleteItemsAction(index)
    //     store.dispatch(action)
    // }
    // storeChange(){
    //     this.setState(store.getState())
    // }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        addItems(e){
            const action=addItemsAction(e.target.value)
            dispatch(action)
        },
        inputValueChange(e){
            const action=changeInputAction(e.target.value)
            dispatch(action)
        },
        deleteItems(index){
            const action=deleteItemsAction(index)
            dispatch(action)
        }
    }
}
const mapStateToProps=(state)=>{
    return{
        inputValue:state.inputValue,
        List:state.List
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(ToDoList);