import React from 'react';
import ExpenseDate from './ExpenseDate/ExpenseDate.js';
import './ExpenseItem.css';
import ExpensePrice from './ExpensePrice/ExpensePrice.js';


const ExpenseItem =(props)=>{
    return (

        <div className='expense-item'>
            {/* <h1>ExpenseDate</h1> */}
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item-Description'>
                <h2>{props.title}</h2>
                {/* <div className='expense-item-price'>
                    <h2>{props.price}</h2>
                </div> */}
                <button onClick={()=>{
                    props.removeItem(props.key)
                }}>Delete</button>
                <ExpensePrice price={props.price}></ExpensePrice>
            </div>

        </div>
    )
}
export default ExpenseItem;
