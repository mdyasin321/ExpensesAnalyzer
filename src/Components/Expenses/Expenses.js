import React, { useState } from 'react';


import ExpenseItem from './ExpenseItem/ExpenseItem.js';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter/ExpenseFilter.js';
import ExpensesChart from './ExpensesChart/ExpensesChart.js';

const Expenses =(props)=>{

        const [filteredState,setFilteredState]=useState('')
        const yearFilterHandler=(selectedYear)=>{

                setFilteredState(selectedYear);

        }





        // let expenseItemArray=[]

        // if(filteredState===''){



        //          expenseItemArray=props.items.map((element)=>{

                     
        //                 return (
        
        //                         <ExpenseItem
        //                          key={element.id}
        //                         title={element.title}
        //                         date={element.date}
        //                         price={element.amount}
        //                         ></ExpenseItem>
                          
        //                 )
        //         })

        // }

        // else{

        //         expenseItemArray=props.items.map((element)=>{
                      

        //           let yr=element.date.getFullYear();

        //         //   here the getFullYear method returns the year in number/Integer , so we have to convert it into string

        //         if(yr.toString()===filteredState){
                        


        //                 return (

        //                         <ExpenseItem
        //                          key={element.id}
        //                         title={element.title}
        //                         date={element.date}
        //                         price={element.amount}
        //                         ></ExpenseItem>
                          
        //                 )

        //         }

        //    })

        // }




        

                                                // OR
        // (Using filter method of array for displaying expenses , instead of if and else condition)



        const filteredExpense=props.items.filter((element)=>{
                // the filtered method will return those element that will pass the test function


                let yr=element.date.getFullYear().toString();
                 //   here the getFullYear method returns the year in number/Integer , so we have to convert it into string

                   
                         if(yr===filteredState){
                                return element;
                         }
                
        })   
        
        let expenseItemArray=[]

        if(filteredExpense.length===0){
                expenseItemArray=<p style={{color:'white' ,textAlign:'center',fontSize:'1.5rem'} }>No items present</p>
        }
        
        
        else{ 
                expenseItemArray = filteredExpense.map((element)=>{

                return (
                                       <ExpenseItem
                                         key={element.id}
                                        title={element.title}
                                        date={element.date}
                                        price={element.amount}
                                        ></ExpenseItem>
                )         
        })

}


    return (
        <div className='expenses'>
                <ExpenseFilter yearSelected={filteredState} yearFilter={yearFilterHandler}></ExpenseFilter>
                <ExpensesChart itemsArray={filteredExpense}></ExpensesChart>
                {expenseItemArray}
       

        </div> 

    )
}

export default Expenses;