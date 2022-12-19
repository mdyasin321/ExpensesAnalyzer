import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm =(props)=>{
    const [enterdTitle,setEnteredTitle]=useState("")
    const [enterdAmount,setEnteredAmount]=useState("")
    const [enterdDate,setEnteredDate]=useState("")


  const titleChangeHandler=(event)=>{

    setEnteredTitle(event.target.value)
    console.log(enterdTitle);
   }






   const amountChangeHandler=(event)=>{
    
    setEnteredAmount(event.target.value)
    // console.log(enterdTitle);
   }





   const dateChangeHandler=(event)=>{
    
    setEnteredDate(event.target.value)
    // console.log(enterdTitle);
   }





   const submitHandler=(event)=>{

    event.preventDefault();
    //  This method has been added to prevent the webpage to get reloaded

    const expenseData={
        title:enterdTitle,
        amount:+enterdAmount,
        // here I have added "+" in front of enteredAmount to convert the amount from string to number
        date: new Date(enterdDate)
    }

    console.log(+enterdAmount+'------')

    props.onSaveExpenseData(expenseData)

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

    

   }



    return (
    <form  onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>
                    Title
                </label>
                <input type='text' value={enterdTitle}  onChange={titleChangeHandler}></input>
                
            </div>
            <div className='new-expense__control'>
                <label>
                    Amount
                </label>
                <input type='number'   min="0.01"  step='0.01'   onChange={amountChangeHandler}  value={enterdAmount}></input>
                
            </div>
            <div className='new-expense__control'>
                <label>
                    Date
                </label>
                <input type='date' min='2019-01-01'  max='2023-12-22'   onChange={dateChangeHandler}  value={enterdDate}></input>
                
            </div>
            <div className='new-expense__actions'>
                <button  type='submit'>Add Expense</button>
            </div>
        </div>
    </form>
    )
}

export default ExpenseForm;