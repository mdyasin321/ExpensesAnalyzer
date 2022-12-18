import React from 'react';
import './ExpensesBar.css';

const ExpensesBar=(props)=>{

    let  chartBarFillHeight='0%';


     if(props.maxValue>0){
        chartBarFillHeight=Math.round((props.value/props.maxValue)*100)+'%';
     }
   

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{height:chartBarFillHeight}}></div>
            </div>
            <div className='chart-bar__label'>
                <h2>{props.month}</h2>
            </div>
        </div>
    )
}

export default ExpensesBar;