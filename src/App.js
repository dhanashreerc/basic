import { useState } from "react";

function App(){
  return(
    <>
      <h1>My ToDo</h1>
      <MyToDo/>
    </>
    
  );
}

function MyToDo(){
  //s1
  let [todo, setTodo] = useState({task:""});

  //s3
  let handleTaskChange=(e)=>{
    //console.log(e.target.value);
    let newTodo = {...todo,task:e.target.value};
    //console.log(newTodo);
    setTodo(newTodo);

  }

  //s4
  let handleClick=()=>{
    alert(todo.task);
  }
  return(
    <>
      <input onChange={handleTaskChange} className="form-control" type="text" placeholder="Enter Task..." value={todo.task} />
      <input onClick={handleClick} type="button" value="Add Todo" />
    </>
  );
}

export default App;