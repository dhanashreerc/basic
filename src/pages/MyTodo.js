import {useState} from "react";

function MyToDo(){

    let [successBox, setSuccessBox] = useState(false)
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
  
  
      //clear the input box after button clicked
      let newTodo = {task:" ", desc:" "};
      setTodo(newTodo);
  
  
      //alert-box value change
      setSuccessBox(true);
      setTimeout(()=>{
        setSuccessBox(false);
      },1000);
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
        {/**---conditional rendering------*/}
        {successBox && <div className="alert alert-success">Operation Success</div> }
        
      </>
    );
  }
  
  export default MyToDo;