import React from 'react';
import classes from './ErrorModalAndBackdrop.module.css';

const ErrorModalAndBackdrop =(props)=>{
    return (

        <div>
            <div className={classes.backdrop}  onClick={props.click}></div>
            <div className={classes.modal}>
               <header className={classes.header} >
                <h2>
                 {props.title}
                </h2>
               </header>
               <div className={classes.content}>
                <p>
                   {props.message}
                </p>
                </div>
                <footer className={classes.actions}>
                <button onClick={props.click}>
                       okay
                </button>
               </footer>
         </div>
        </div>

    )
}
export default ErrorModalAndBackdrop;