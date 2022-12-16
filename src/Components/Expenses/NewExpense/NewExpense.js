import React from 'react';
import ExpenseForm from './ExpenseForm/ExpenseForm.js';
import './NewExpense.css';

const NewExpense =(props)=>{
    
    const saveExpenseDataHandler=(enteredExpenseData)=>{

        const expenseData={
            ...enteredExpenseData,
            id : Math.random().toString()
        }

        console.log('in NEW eXPENSE');
        console.log(expenseData)

        props.expenseHandler(expenseData);

    }



    return (
        <div className='new-expense'>
            <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>

        </div>
    )
}

export default NewExpense;