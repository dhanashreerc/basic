//import { useState } from "react";
import {BrowserRouter,Link,Route, Routes, useNavigate} from "react-router-dom";
import MyToDo from "./pages/MyTodo";
import MyRegistration from "./pages/MyRegistration";
import MyNavLink from "./pages/MyNavLink";
import MyTodoList from "./pages/MyTodoList";
import MyUserList from "./pages/MyUserList";
import ValidationDemo from "./pages/ValidationDemo";
//import MyNavUsingButton from "./pages/MyNavUsingButton";

function App(){
  return(
    <>
      <BrowserRouter>
        <MyNavLink/>
        <Routes>
          <Route path="/" element={<h1>Hello</h1>}/>
          <Route path="/home" element={<h1>Home</h1>}/>
          <Route path="/todo" element={<MyToDo/>}/>
          <Route path="/todo-list" element={<MyTodoList/>}/>
          <Route path="/user-list" element={<MyUserList/>}/>
          <Route path="/validation-demo" element={<ValidationDemo/>}/>
          <Route path="/registration" element={<MyRegistration/>}/>
          <Route path="*" element={<h1>Page Not found</h1>}/>
        </Routes>
        
      </BrowserRouter>
    </>
    
  );
}








export default App;