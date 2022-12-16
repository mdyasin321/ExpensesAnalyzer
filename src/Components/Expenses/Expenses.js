import React, { useState } from 'react';


import ExpenseItem from './ExpenseItem/ExpenseItem.js';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter/ExpenseFilter.js';

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
        
        
        const expenseItemArray=filteredExpense.map((element)=>{

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
                <ExpenseFilter yearSelected={filteredState} yearFilter={yearFilterHandler}></ExpenseFilter>
                {expenseItemArray}
       

        </div> 

    )
}

export default Expenses;