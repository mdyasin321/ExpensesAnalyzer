import React from 'react';
import './ExpenseFilter.css';

const ExpenseFilter=(props)=>{

    const filter=(event)=>{

        props.yearFilter(event.target.value)

        console.log('in expense filter');
        console.log(event.target.value)

    }
    return (
        <div  className='filterControl'>  
            <label>Filter By Year</label>

            <select name="year"  id="year_type"  onChange={filter}>

                {/* here the event .target. value refers to the value attribute of option tag element */}
                <option value="2019"> 2019</option>
                <option value="2020"> 2020</option>
                <option value="2021"> 2021</option>
                <option value="2022"> 2022</option>
                <option value="2023"> 2023</option>
            </select>
        </div>
    )
}

export default ExpenseFilter;