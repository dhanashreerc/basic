import { useState } from "react";
import MyToDo from "./pages/MyTodo";

function App(){
  return(
    <>
      <h1>Registration</h1>
      <MyRegistration/>
      
    </>
    
  );
}

function MyRegistration(){
  let [user, setUser]= useState({
    username:"", 
    password:"", 
    email:"",
    mobile:""
  });

  let handleNameChange=(e)=>{
    let newUser = {...user,username: e.target.value};
    setUser(newUser);
  }
  let handlePassChange=(e)=>{
    let newUser = {...user,password: e.target.value};
    setUser(newUser);
  }
  let handleEmailChange=(e)=>{
    let newUser = {...user,email: e.target.value};
    setUser(newUser);
  }
  let handleMobileChange=(e)=>{
    let newUser = {...user,mobile: e.target.value};
    setUser(newUser);
  }

  let registerAction = async()=>{
    //backend
    let url= `http://localhost:4000/adduser?username=${user.username}&password=${user.password}&email=${user.email}&mobile=${user.mobile}`
    await fetch(url);

    let newuser={
      username:"", 
      password:"", 
      email:"",
      mobile:""
    };

    setUser(newuser);
  }

  return(
    <>
      <input 
        className="form-control" 
        type="text" 
        placeholder="Enter username" 
        value={user.username} 
        onChange={handleNameChange}
      />
      <input 
        className="form-control" 
        type="password" 
        placeholder="Enter password" 
        value={user.password} 
        onChange={handlePassChange}
      />
      <input 
        className="form-control" 
        type="text" 
        placeholder="Enter email" 
        value={user.email} 
        onChange={handleEmailChange}
      />
      <input 
        className="form-control" 
        type="text" 
        placeholder="Enter mobile" 
        value={user.mobile}
        onChange={handleMobileChange}
      />
      <input 
        className="w-100" 
        type="button" 
        value="Register"
        onClick={registerAction} 
      />
    </>
  )
}


export default App;