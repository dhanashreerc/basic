import {useRef, useState} from "react";
function App(){
  return(
    <>
      <h1>My Project</h1>
      <ListDemo/>
    </>
  );
  

}

function ListDemo(){
  let inputRef = useRef();
  let [list, setList] = useState(["delhi"]);

  //C2: Action Member Function
  let handleClick = ()=>{
    // let inputRef= document.querySelector("#id1");
    // let inputVal = inputRef.value;
    //console.log(inputRef.current.value);
    let inputVal = inputRef.current.value;
   let newList = [inputVal,...list];
    setList(newList);
    inputRef.value=" ";
    
  }
  return(
    <>
      {/**C3: Event Binding */}
      <div className="row justify-content-center align-items-center " style={{height:"100vh"}}>
        <div className="col-sm-12 col-md-6">
          <h1>Registration App</h1>
          <input className="form-control" type="text"ref={inputRef} placeholder="Enter user input..."/>
          <input className="form-control" type="text"ref={inputRef} placeholder="Enter Password..."/>
          <input className="form-control" type="text"ref={inputRef} placeholder="Enter Email..."/>
          <input  type="button" value="lOGIN" onClick={handleClick}/>
        </div>

      </div>
      
      
      {/* *C4: List
      {list.map((item)=>(
        <MessageDemo message={item}/>
        
      ))}
       */}
    </>
  )
}

function MessageDemo({message}){
  return(
    <div>
          <h1>Hello {message}</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque dolorem amet cum soluta explicabo iusto eius? Deleniti ex neque deserunt dolore ea unde autem amet laboriosam ducimus animi? Magni, autem?</p>
          <div>
            <input type="button" value="&#128077;" />
            <input type="button" value="&#128078;" />
          </div>
        </div>
  )
}
export default App;