import React, { Component } from 'react';

class Taskinput extends Component {
  constructor( props){
        super(props);

    this.state = {
        input: ''
    };
  }
 render( ){
     return(
         <div className="task-input">
             <input></input>
             <button>ADD</button>
         </div>
     );
 }   
} 

export default Taskinput;