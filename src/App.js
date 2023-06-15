import { useState } from "react";

function App(){
  return(
    <>
      <h1>My ToDo</h1>
      <MyTodo/>
    </>
  )
}

function MyTodo(){
  //s1
  let [todo, setTodo]= useState({task:"",description:""});
  let handleTaskAction = (e)=>{
    //console.log(e.target); => input object
    let newTodo = {...todo,task:e.target.value};
    setTodo(newTodo);
  }

  let addTodoAction = ()=>{
    //alert(todo.task + todo.decription);
    console.log(todo);
  }

  let handleDescryption=(e)=>{
    //console.log(e.target.value);
    let newTodo = {...todo,description:e.target.value};
    setTodo(newTodo);

  }

  return(
    <>
      <input className="form-control" type="text" placeholder="Enter todo" value={todo.task} onChange={handleTaskAction}/>
      <textarea className="form-control" cols="30" rows="3" placeholder="Enter Description" onChange={handleDescryption}></textarea>
      <input type="button" value="Add Todo" onClick={addTodoAction}/>
    </>
  );
}

export default App;