import React , {Component} from 'react';
import Expenses from './Components/Expenses/Expenses.js';
import './App.css';
import NewExpense from './Components/Expenses/NewExpense/NewExpense.js';


class App extends Component {

  
  render (){
    return (
      <div className='app'>
        <div className='background'></div>
        <h1>Lets get started</h1>
        <NewExpense></NewExpense>
        <Expenses></Expenses>
        
      </div>


    )
  }
}

export default App;
