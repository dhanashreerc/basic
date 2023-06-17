import { useState } from "react";
import {BrowserRouter,Link,Route, Routes} from "react-router-dom";
import MyToDo from "./pages/MyTodo";
import MyRegistration from "./pages/MyRegistration";

function App(){
  return(
    <>
      <BrowserRouter>
        <Link to={"/home"}>Home  |</Link>
        <Link to={"/todo"}>Todo  |</Link>
        <Link to={"/registration"}>Registration  |</Link>
        <Routes>
          <Route path="/" element={<h1>Hello</h1>}/>
          <Route path="/home" element={<h1>Home</h1>}/>
          <Route path="/todo" element={<MyToDo/>}/>
          <Route path="/registration" element={<MyRegistration/>}/>
          <Route path="*" element={<h1>Page Not found</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
    
  );
}



export default App;