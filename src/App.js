import {useRef, useState} from "react";
function App(){
  return(
    <>
      <h1>Stateful Lists</h1>
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
      <input type="text"ref={inputRef} placeholder="WhatsAPP..."/>
      <input type="button" value="Add Message" onClick={handleClick}/>
      
      {/**C4: List */}
      {list.map((item)=>(
        <div>
          <h1>Hello {item}</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque dolorem amet cum soluta explicabo iusto eius? Deleniti ex neque deserunt dolore ea unde autem amet laboriosam ducimus animi? Magni, autem?</p>
          <div>
            <input type="button" value="&#128077;" />
            <input type="button" value="&#128078;" />
          </div>
        </div>
        
      ))}
      
    </>
  )
}

export default App;