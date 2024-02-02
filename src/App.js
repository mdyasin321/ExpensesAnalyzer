import React , {useState} from 'react';
import Expenses from './Components/Expenses/Expenses.js';
import './App.css';
import NewExpense from './Components/Expenses/NewExpense/NewExpense.js';


// class App extends Component {

//   state={

    
//     expenses : [
//       {
//         id: 'e1',
//         title: 'Toilet Paper',
//         amount: 94.12,
//         date: new Date(2020, 7, 14),
//       },

//       { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },

//       {
//         id: 'e3',
//         title: 'Car Insurance',
//         amount: 294.67,
//         date: new Date(2021, 2, 28),
//       },
//       {
//         id: 'e4',
//         title: 'New Desk (Wooden)',
//         amount: 450,
//         date: new Date(2021, 5, 12),
//       },
//     ]

//   }



//    addExpenseHandler=(expen)=>{
//          console.log('in app js');
//          console.log(expen);

//          const expenses_new=[...this.state.expenses,expen];
      

//          this.setState({
//            expenses:expenses_new
//          })



//   }

  
//   render (){

//     console.log(this.state.expenses)
//     return (
//       <div className='app'>
//         <div className='background'></div>
//         <h1>Lets get started</h1>
        
//         <NewExpense expenseHandler={this.addExpenseHandler} ></NewExpense>
//         <Expenses  items={this.state.expenses}></Expenses>
        
//       </div>


//     )
//   }
// }

// export default App;
                                                
 

                                            //  OR
                        // (USING useState instead of State and this.setState)


const App =()=>{


   const [expenses,setExpenses]= useState([

    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },

    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },

    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28)
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12)
    }])


        const addExpenseHandler=(expen)=>{
   

 //  here adding the expense data from user to the existing array
        //  const expenses_new=[expen,...expenses];
        //  setExpenses(expenses_new);
        

                  //  OR
           // (USING prevState)


          //  This is the most correct way as we are using the previous state
                  setExpenses((prevState)=>{
                          const expenses_new=[expen,...prevState];  
                         
                    return(
                      expenses_new

                    )
                  })
       
      

       
                  console.log("app.jsfile 137    ")


  }


   const deleteExpenseHandler=(id)=>{

    const expenseIndex=expenses.findIndex((element)=>{
      return (
        element.id===id
      )
    })
    console.log(expenseIndex+' index')

    const newExpen=[...expenses];
    newExpen.splice(expenseIndex,1);

    setExpenses(newExpen);

   }
  

    console.log(expenses)
    return (
      <div className='app'>
        <div className='background'></div>
        <h1>Lets get started</h1>
        {console.log('rendering started')}
        <NewExpense expenseHandler={addExpenseHandler} ></NewExpense>
        <Expenses  items={expenses}  delete={deleteExpenseHandler}></Expenses>
        
      </div>


    )
  
}

export default App;


