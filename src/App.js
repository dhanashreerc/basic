import {useState} from "react";
function App(){
  return(
    <>
      <h1>Stateful Lists</h1>
      <ListDemo/>
    </>
  );
  

}

function ListDemo(){
  //let list = ["delhi"];
  //C1: Stateful variable
  let [list, setList] = useState(["delhi"]);

  //C2: Action Member Function
  let handleClick = ()=>{
    //why not push(), cuz it updates same object
    //setter method requires immutable object
    //we have to pass new list
    let newList = [...list,"mumbai"];
    console.log(newList);

    //DOM::trigger dom
    setList(newList);
  }
  return(
    <>
      {/**C3: Event Binding */}
      <input type="button" value="Add New Item" onClick={handleClick}/>
      
      {/**C4: List */}
      {list.map((item)=>(
        <h1>Hello {item}</h1>
      ))}
      
    </>
  )
}

export default App;