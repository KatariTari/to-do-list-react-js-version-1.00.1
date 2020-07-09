import React, { Component } from 'react';
import './App.css';
import Todoitem from './ToDoItem/TodoItem.js';
import todosData from './todosData.js';
import Taskinput from './ToDoItem/Taskinput.JS'

class App  extends React.Component {
  constructor(){
    super();

    this.state = {
      TodoItems : todosData
    }
  }
  handelChange = id =>{
    const index = this.state.TodoItems.map(item => item.id).indexOf(id);
    this.setState( state =>{
      let {TodoItems} = state;
      TodoItems[index].completed = true;
      return TodoItems;
    })
  }
  addTask = task =>{
    this.setState(state =>{
      let { tasks} = state;
      tasks.push({
        id:Tasks.length !== 0 ? tasks.length : 0,
        title :task,
        done: false
      });
    });
  };

  doneTask =id => {
    const index = this.state.task.map(task => task.id).indexOf(id);
    this.setState (state =>{
      let { task } = state;
      tasks {index} done = true;
      return tasks;
    })
  }
  
  addTask = () => {
    const { input } = this.state;
    if(input){
    this.props.addTask(input);
    this.setState({input: ''});
    }
  };

  render(){
    const{TodoItems} = this.state;
    const activeTasks = TodoItems.filter(task => task.completed === false);
    const completedTasks = TodoItems.filter(task =>task.completed === true);
    const finalTasks = [...activeTasks,...completedTasks].map(item =>{
      return(
        <Todoitem
        key={item.id}
         description={item.description}
         completed={item.completed}
         handelChange={ ()=>{ this.handelChange(item.id)}}
        />
      )
    })
    return (
      <div className="App">
        <h1 className="title"> TASK </h1>
        <h2 className=".titleBlock">TASKS</h2>
        
    <Taskinput>addTask-{this.addTask}</Taskinput>
    {finalTasks}
      </div>
    );
  }
}

export default App;
