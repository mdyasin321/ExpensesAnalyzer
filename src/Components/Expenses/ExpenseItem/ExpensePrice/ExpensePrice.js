import React from 'react';
import './ExpensePrice.css';

const  ExpensePrice =(props)=>{
    return (
           <div className='expense-item-price'>
               <h2>{props.price}</h2>
           </div>
    )
}

export default ExpensePrice;