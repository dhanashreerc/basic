import {useRef, useState} from "react";

function MyToDo(){
    let formRef = useRef();
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
      //form-validation
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if(!formStatus){
        return;
      }
      //alert(todo.task + todo.desc);
      //connecting to backend
      let url = `http://localhost:4000/addtodo?task=${todo.task}&desc=${todo.desc}`;
      await fetch(url);
  
  
      //clear the input box after button clicked
      let newTodo = {task:"",desc:""};
      setTodo(newTodo);
  
  
      //alert-box value change
      setSuccessBox(true);
      setTimeout(()=>{
        setSuccessBox(false);
      },1000);

      formRef.current.classList.remove("was-validated");
    }
    return(
      <>
        <form ref={formRef} className="needs-validation">
          <input 
            onChange={handleTaskChange} 
            className="form-control" 
            type="text" 
            placeholder="Enter Task..." 
            value={todo.task} 
            required
          />
          <textarea 
            onChange={handleDesChange}
            className="form-control" 
            cols="30" 
            rows="3"
            placeholder="Enter Description..."
            value={todo.desc} 
            required
    
          />
          <input 
            onClick={handleClick} 
            type="button" 
            value="Add Todo" 
          />
        </form>
        
        {/**---conditional rendering------*/}
        {successBox && <div className="alert alert-success">Operation Success</div> }
        
      </>
    );
  }
  
  export default MyToDo;