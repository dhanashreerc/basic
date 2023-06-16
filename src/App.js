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

  let [list, setList] = useState(["delhi"]);

  //C2: Action Member Function
  let handleClick = ()=>{
    let inputRef= document.querySelector("#id1");
    let inputVal = inputRef.value;
    let newList = [inputVal,...list];
    setList(newList);
    inputRef.value=" ";
    
  }
  return(
    <>
      {/**C3: Event Binding */}
      <input type="text" id="id1" placeholder="WhatsAPP..."/>
      <input type="button" value="Add Message" onClick={handleClick}/>
      
      {/**C4: List */}
      {list.map((item)=>(
        <h1>Hello {item}</h1>
      ))}
      
    </>
  )
}

export default App;