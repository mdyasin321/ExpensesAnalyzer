import React from 'react';
import ExpensesBar from './ExpensesBar/ExpensesBar';
import './ExpensesChart.css';

const ExpensesChart=(props)=>{



    const chartData=[
        {label:'Jan' , value:0},
        {label:'Feb' , value:0},
        {label:'Mar' , value:0},
        {label:'Apr' , value:0},
        {label:'May' , value:0},
        {label:'Jun' , value:0},
        {label:'Jul' , value:0},
        {label:'Aug' ,value:0},
        {label:'Sep' , value:0},
        {label:'Oct' , value:0},
        {label:'Nov' , value:0},
        {label:'Dec' , value:0}
 
    ]


    for(let expen of props.itemsArray){
        let monthIndex =expen.date.getMonth();
    //    here the getMonth() method returns the index of month
        chartData[monthIndex].value +=expen.amount;
    }

    const valuePoints=chartData.map((element)=>{
        return (
            element.value
        )

        // here storing the element values into an array
    })


    //   as we know that Math.max() requires numbers as parameters like 2,6,8.. , so the (...valuePoints) will become (1,3,6,7,8)

    let maximum=Math.max(...valuePoints)



    return (
        <div className='chart'>
            {chartData.map((element,index)=>{
                return(
                    <ExpensesBar
                    key={index}
                    month={element.label}
                    value={element.value}
                    maxValue={maximum}></ExpensesBar>
                )
            })}
        {/* <ExpensesBar
                     value={}
                     maxValue={}
                     label={}></ExpensesBar> */}
        
        </div>
    )
}
export default ExpensesChart;