import React , {Component} from 'react';
import Expenses from './Components/Expenses/Expenses.js';
import './App.css';


class App extends Component {

  
  render (){
    return (
      <div className='app'>
        <h1>Lets get started</h1>
        <Expenses></Expenses>
      </div>


    )
  }
}

export default App;
