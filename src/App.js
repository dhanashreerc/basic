import { useState } from "react";
import {BrowserRouter,Link,Route, Routes, useNavigate} from "react-router-dom";
import MyToDo from "./pages/MyTodo";
import MyRegistration from "./pages/MyRegistration";
import MyNavLink from "./pages/MyNavLink";
import MyNavUsingButton from "./pages/MyNavUsingButton";

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






export default App;