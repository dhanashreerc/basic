import { useState } from "react";
import {BrowserRouter,Route, Routes} from "react-router-dom";
import MyToDo from "./pages/MyTodo";
import MyRegistration from "./pages/MyRegistration";

function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Hello</h1>}/>
          <Route path="/home" element={<h1>Home</h1>}/>
          <Route path="/todo" element={<MyToDo/>}/>
          <Route path="/signup" element={<MyRegistration/>}/>
        </Routes>
      </BrowserRouter>
    </>
    
  );
}



export default App;