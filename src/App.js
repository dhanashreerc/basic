function App(){
  return(
    <>
    <h1>Props Demo</h1>
    <ListDemo/>
    </>
  );

}

function ListDemo(){
  let list = ["delhi","mumbai","chennai"];
  return(
    <>
    <h1>Hello world</h1>
    {/**for Each is consumer */}
    {list.forEach((item)=>item)}
    {/**map method is i/o */}
    {list.map((item) =>  item)};
    </>
  );
}
function MessageDemo({username,city}){
  //console.log("Props for current component: ",props);
  //Object {  }
  //Object { username: "Jae", city: "LA" }
  return(
    <>
    <h1>Hello {username}</h1>
    <h1>I am from {city}</h1>
    </>
  );
}

export default App;