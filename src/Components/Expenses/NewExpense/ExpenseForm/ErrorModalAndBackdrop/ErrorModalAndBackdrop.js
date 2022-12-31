import React from 'react';
import  ReactDOM  from 'react-dom';
import classes from './ErrorModalAndBackdrop.module.css';




// const ErrorModalAndBackdrop =(props)=>{
//     return (

//         <div>
//             <div className={classes.backdrop}  onClick={props.click}></div>
//             <div className={classes.modal}>
//                <header className={classes.header} >
//                 <h2>
//                  {props.title}
//                 </h2>
//                </header>
//                <div className={classes.content}>
//                 <p>
//                    {props.message}
//                 </p>
//                 </div>
//                 <footer className={classes.actions}>
//                 <button onClick={props.click}>
//                        okay
//                 </button>
//                </footer>
//          </div>
//         </div>

//     )
// }







                                            // OR
                                    // (USING REACT PORTALS)

        const Backdrop=(props)=>{
            return(

                <div className={classes.backdrop}  onClick={props.press}></div>

            )
        }

        const Modal=(props)=>{
            return (
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
            )
        }




        
const ErrorModalAndBackdrop =(props)=>{
    return (


        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop press={props.click}/>, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<Modal title={props.title} message={props.message}   click={props.click}/>, document.getElementById('modal-root'))}
        </React.Fragment>

    )
}




export default ErrorModalAndBackdrop;