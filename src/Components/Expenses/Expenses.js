import React from 'react';


import ExpenseItem from './ExpenseItem/ExpenseItem.js';
import './Expenses.css';

const Expenses =(props)=>{


        const expenseItemArray=props.items.map((element)=>{
                return (

                        <ExpenseItem
                         key={element.id}
                        title={element.title}
                        date={element.date}
                        price={element.amount}
                        ></ExpenseItem>

                )
        })

    return (
        <div className='expenses'>
                {expenseItemArray}
       

        </div> 

    )
}

export default Expenses;