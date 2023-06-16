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
  let [todo, setTodo] = useState({task:"",desc:""});

  //s3
  let handleTaskChange=(e)=>{
    //console.log(e.target.value);
    let newTodo = {...todo,task:e.target.value};
    //console.log(newTodo);
    setTodo(newTodo);

  }

  let handleDesChange=(e)=>{
    //console.log(e.target.value);
    let newTodo = {...todo,desc:e.target.value};
    //console.log(newTodo);
    setTodo(newTodo);

  }

  //s4
  let handleClick=async()=>{
    //alert(todo.task + todo.desc);
    //connecting to backend
    let url = `http://localhost:4000/addtodo?task=${todo.task}&desc=${todo.desc}`;
    await fetch(url);

  }
  return(
    <>
      <input 
        onChange={handleTaskChange} 
        className="form-control" 
        type="text" 
        placeholder="Enter Task..." 
        value={todo.task} 
      />
      <textarea 
        onChange={handleDesChange}
        className="form-control" 
        cols="30" 
        rows="3"
        placeholder="Enter Description..."

      />
      <input 
        onClick={handleClick} 
        type="button" 
        value="Add Todo" 
      />
    </>
  );
}

export default App;