import { useState } from "react";
import {BrowserRouter,Link,Route, Routes, useNavigate} from "react-router-dom";
import MyToDo from "./pages/MyTodo";
import MyRegistration from "./pages/MyRegistration";
import MyNavLink from "./pages/MyNavLink";

function App(){
  return(
    <>
      <BrowserRouter>
        <MyNavLink/>
        <Routes>
          <Route path="/" element={<h1>Hello</h1>}/>
          <Route path="/home" element={<h1>Home</h1>}/>
          <Route path="/todo" element={<MyToDo/>}/>
          <Route path="/registration" element={<MyRegistration/>}/>
          <Route path="*" element={<h1>Page Not found</h1>}/>
        </Routes>
        <MyNavUsingButton/>
      </BrowserRouter>
    </>
    
  );
}

function MyNavUsingButton(){
  const navigate = useNavigate();
  let goToHome=()=>{
    navigate("/home");
  }
  let goToTodo=()=>{
    navigate("/todo");
  }
  let goToRegister=()=>{
    navigate("/registration");
  }
  return(
    <div>
      <input type="button" value="Home" onClick={goToHome} />
      <input type="button" value="Todo" onClick={goToTodo} />
      <input type="button" value="Registration" onClick={goToRegister} />
    </div>
    
  )
}





export default App;